export interface UpdatePostRequest {
    title:string  | undefined;
    content:string  | undefined;
    summary:string  | undefined;
    urlHandle:string  | undefined;
    featuredImageUrl:string  | undefined;
    author:string  | undefined;
    visible:boolean  | undefined;
    publishedDate:Date  | undefined;
    updatedDate:Date  | undefined;
}