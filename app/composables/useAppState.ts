const loading = ref(false);
const toast = useToast();

export const useAppState = () => {
  const setLoading = (value: boolean) => {
    loading.value = value;
  };

  const setError = (msg: string) => {
    loading.value = false;
    toast.add({
      description: msg,
      color: "error",
    });
  };

  return {
    loading,
    setLoading,
    setError,
  };
};
