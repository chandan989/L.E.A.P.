const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">About L.E.A.P.</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          L.E.A.P. (Learning Enhanced Application Platform) is a revolutionary new platform designed to enhance the learning experience. Our mission is to provide an intuitive and powerful platform for creating and deploying educational applications that are both engaging and effective.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Platform Features</h2>
        <ul className="list-disc list-inside">
          <li>Interactive Content Creation</li>
          <li>Personalized Learning Paths</li>
          <li>Real-time Progress Tracking</li>
          <li>Collaborative Learning Tools</li>
          <li>Seamless Integration with Existing Systems</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
