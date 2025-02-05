### Server should have 2 endpoints

- Read items

  ```
  GET /
  ```

  - with parameters **`null`**
  - with response data **`TreeNode[]`**

- Upload items

  ```
  POST /
  ```

  - with body

    ```ts
    {
      label: string;
      path: string;
      children: TreeNode[];
      content: string;
      type: string = 'file' | "directory";
    }
    ```

  - with response

    ```ts
    null
    ```

- Create item

  ```
  POST /item
  ```

  - with body

    ```ts
    {
      label: string;
      path: string;
      children: TreeNode[];
      content: string;
      type: string = 'file' | "directory";
    }
    ```

  - with response data

    ```ts
    null
    ```

- Update item

  ```
  PUT /item
  ```

  - with body

    ```ts
    {
      "old_item": {
        label: string;
        path: string;
        children: TreeNode[];
        content: string;
        type: string = 'file' | "directory";
      },
      "new_item": {
        label: string;
        path: string;
        children: TreeNode[];
        content: string;
        type: string = 'file' | "directory";
      }
    }
    ```

  - with response data

    ```ts
    null
    ```

- Delete item

  ```
  DELETE /item
  ```

  - with body

    ```ts
    {
      label: string;
      path: string;
      children: TreeNode[];
      content: string;
      type: string = 'file' | "directory";
    }
    ```

  - with response data

    ```ts
    null
    ```

### Schema

```typescript
interface UploadNode {
    label: string;
    path: string;
    children: UploadNode[];
    content: string;
    type: string = 'file' | "directory";
}
```
