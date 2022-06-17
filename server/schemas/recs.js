export default {
  name: "recs",
  title: "Recs",
  type: "document",
  fields: [
    {
      name: "authorName",
      title: "AuthorName",
      type: "string",
    },
    {
      name: "Title",
      title: "Title",
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
    {
      name: "type",
      title: "Type",
      type: "string",
    },
  ],
};
