type GitHubResponse = {
  name: string;
  path: string;
  sha: string;
  size: number;
  type: "file" | "dir";
  content: string;
  encoding: string;
};

export const useGitHub = () => {
  const owner = computed(() => localStorage.getItem("githubOwner") || "");
  const repo = computed(() => localStorage.getItem("githubRepo") || "");
  const apiToken = computed(() => localStorage.getItem("githubApiToken") || "");

  const toast = useToast();
  const getItems = async (path: string): Promise<GitHubResponse[]> => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner.value}/${repo.value}/contents/${path}`,
        {
          headers: {
            Authorization: `Bearer ${apiToken.value}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      toast.add({
        description: error as string,
        color: "error",
      });

      throw error;
    }
  };

  const getItem = async (path: string): Promise<GitHubResponse> => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner.value}/${repo.value}/contents/${path}`,
        {
          headers: {
            Authorization: `Bearer ${apiToken.value}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      toast.add({
        description: error as string,
        color: "error",
      });

      throw error;
    }
  };

  const createFile = async (file: TreeNode) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner.value}/${repo.value}/contents/${file.path}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${apiToken.value}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Create file at ${file.path}`,
            content: file.content,
            branch: "main",
          }),
        }
      );
      const data = await response.json();
      return {
        sha: data.content.sha,
        name: data.content.name,
        path: data.content.path,
        content: file.content,
        encoding: "base64",
      };
    } catch (error) {
      toast.add({
        description: error as string,
        color: "error",
      });

      throw error;
    }
  };

  const deleteFile = async (file: TreeNode) => {
    try {
      await fetch(
        `https://api.github.com/repos/${owner.value}/${repo.value}/contents/${file.path}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${apiToken.value}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Delete file at ${file.path}`,
            sha: file.sha,
            branch: "main",
          }),
        }
      );
    } catch (error) {
      toast.add({
        description: error as string,
        color: "error",
      });

      throw error;
    }
  };

  const saveAllItems = async () => {
    const items = await getItems("");

    await db.treeNode.clear();
    const fetchRecursive = async (items: GitHubResponse[]) => {
      const promises = items.map(async (item: GitHubResponse) => {
        if (item.type === "dir") {
          await fetchRecursive(await getItems(item.path));
        } else if (item.type === "file") {
          const file = await getItem(item.path);
          await db.treeNode.add({
            sha: file.sha,
            name: file.name,
            path: file.path,
            content: file.content,
            encoding: file.encoding,
          });
        }
      });

      await Promise.all(promises);
    };

    await fetchRecursive(items);
  };

  return {
    saveAllItems,
    createFile,
    deleteFile,
  };
};
