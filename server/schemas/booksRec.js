export default {
  name: "booksRec",
  title: "BooksRec",
  type: "document",
  fields: [
    {
      name: "authorName",
      title: "AuthorName",
      type: "string",
    },
    {
      name: "bookTitle",
      title: "BookTitle",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImgURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
  ],
};
