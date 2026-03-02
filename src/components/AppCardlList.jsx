import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContents = [
  {
    id: 1,
    title: "Build a Responsive Layout with HTML & CSS",
    badge: "Frontend",
    image: "/images/react.webp",
    count: 1840,
  },
  {
    id: 2,
    title: "JavaScript ES6 Crash Course",
    badge: "JavaScript",
    image: "/images/react.webp",
    count: 1625,
  },
  {
    id: 3,
    title: "React Hooks Deep Dive",
    badge: "React",
    image: "/images/react.webp",
    count: 1490,
  },
  // {
  //   id: 4,
  //   title: "Build REST APIs with Node & Express",
  //   badge: "Backend",
  //   image: "/images/react.webp",
  //   count: 1310,
  // },
  // {
  //   id: 5,
  //   title: "MongoDB Aggregation Framework Explained",
  //   badge: "Database",
  //   image: "/images/react.webp",
  //   count: 1185,
  // },
];

const relevantContents = [
  {
    id: 6,
    title: "Semantic HTML for Accessibility",
    badge: "HTML",
    image: "/images/semantic-html.jpg",
    count: 420,
  },
  // {
  //   id: 7,
  //   title: "CSS Grid Advanced Layout Systems",
  //   badge: "CSS",
  //   image: "/images/css-grid.jpg",
  //   count: 390,
  // },
  // {
  //   id: 8,
  //   title: "Managing State with Redux Toolkit",
  //   badge: "React",
  //   image: "/images/redux.jpg",
  //   count: 360,
  // }
  {
    id: 9,
    title: "JWT Authentication in Node.js",
    badge: "Backend",
    image: "/images/jwt-auth.jpg",
    count: 315,
  },
  {
    id: 22,
    title: "Optimizing MongoDB Indexes",
    badge: "Database",
    image: "/images/mongodb-index.jpg",
    count: 290,
  },
  {
    id: 10,
    title: "Optimizing MongoDB Indexes",
    badge: "Database",
    image: "/images/mongodb-index.jpg",
    count: 290,
  },
];

export default function AppCardlList({ title = "" }) {
  const items =
    title === "Popular contents" ? popularContents : relevantContents;

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id + 5}>
          <CardContent className="flex items-center gap-2 px-4 py-0">

            <div className="relative h-14 w-14 overflow-hidden rounded-md">
              <Image
                src="/react.webp"
                fill
                alt={item.title}
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-base font-semibold ">{item.title}</h2>
              <Badge variant="secondary" className="mt-2 px-2 text-sm font-medium">
                {item.badge}
              </Badge>
            </div>

            <Badge variant="outline" className="text-sm px-2 py-1 text-muted-foreground mt-1"> {item.count / 1000}K </Badge>

          </CardContent>
        </Card>
      ))}
    </div>
  );
}