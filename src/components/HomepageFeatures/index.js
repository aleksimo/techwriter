import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical writing',
    Svg: require('@site/static/img/undraw_writer_q06d.svg').default,
    description: (
      <>
        I transform 'geek speak' into 'coffee shop chatter' with meticulous guides and manuals that are so straightforward, even your pet could get the gist.
        Tech jargon, be gone!
      </>
    ),
  },
  {
    title: 'Information architecture',
    Svg: require('@site/static/img/undraw_online_information_re_erks.svg').default,
    description: (
      <>
        No more feeling like you're lost in a digital maze.
        I simplify your content through expert organization, establishing a direct and efficient pathway to the essential information you require.
      </>
    ),
  },
  {
    title: 'UX Writing',
    Svg: require('@site/static/img/undraw_experience_design_re_dmqq.svg').default,
    description: (
      <>
        Transform confusion into clarity with the intuitive UX text.
        Like a friendly tour guide, I'll help your users navigate the journey, making their experience as smooth as a walk in the park.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
