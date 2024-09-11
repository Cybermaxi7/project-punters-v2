import Card from "./Card";

export default function Blog() {
  const blogPosts = [
    {
      imageSrc: "/src/assets/Img/cardComponent.png",
      title: "Intro Text Goes Here",
      description: "Dorem ipsum dolor sit amet, consectetur",
    },
    {
      imageSrc: "/src/assets/Img/cardComponent.png",
      title: "Intro Text Goes Here",
      description: "Dorem ipsum dolor sit amet, consectetur",
    },
    {
      imageSrc: "/src/assets/Img/cardComponent.png",
      title: "Intro Text Goes Here",
      description: "Dorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <div className="bg-green-50 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Read Our Blog</h2>
        <p className="text-gray-500 mt-4">
          We have written some pieces that we believe you might find interesting
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              imageSrc={post.imageSrc}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
