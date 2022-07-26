import React from 'react';
import Layout from './layout';

const About = () => {
  return (
    <>
      <Layout>
        <section
          className="prose prose-lg mx-auto mt-12 mb-32 h-auto max-w-3xl rounded-lg pt-2 shadow-lg"
          style={{ backgroundPositionY: '100%' }}
        >
          <div className="p-4 text-gray-500 dark:text-gray-400">
            <h3 className="font-sans text-xl font-medium text-gray-600 dark:text-white">
              About MikeWeather
            </h3>
            <p className="pt-4">
              MikeWeather is an app that allows you to look at the weather of any city in the world, try it now!
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
