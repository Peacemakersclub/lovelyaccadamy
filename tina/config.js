import { defineConfig } from "tinacms";

const branch = "main";
const clientId = "86aba70b-c964-46f8-9804-8dee298d18a3";

export default defineConfig({
  branch,
  clientId,
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  media: {
    tina: {
      mediaRoot: "assets/images/uploads",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        name: "news",
        label: "News & Events",
        path: "content/news",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["News", "Event", "Competition", "Announcement", "Success Story"],
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
      {
        name: "courses",
        label: "Courses",
        path: "content/courses",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Course Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon (Emoji)",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["hair", "makeup", "nails", "skincare", "certification"],
          },
          {
            type: "string",
            name: "level",
            label: "Level",
          },
          {
            type: "string",
            name: "duration",
            label: "Duration",
          },
          {
            type: "string",
            name: "certification",
            label: "Certification",
          },
          {
            type: "string",
            name: "description",
            label: "Short Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Course Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Full Details",
          },
        ],
      },
    ],
  },
});
