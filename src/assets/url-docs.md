### Server should have 2 endpoints

- Download data
    ```
    GET /
    ```

    - with parameters **`null`**
    - with response data **`UploadNode[]`**

- Upload data

    ```
    POST /files
    ```

    - with body **`UploadNode[]`**
    - with response data **`null`**

### Schema

```typescript
interface UploadNode {
    label: string;
    path: string;
    children?: UploadNode[] | null;
    content: string;
    type: string = 'file' | "directory";
}
```
