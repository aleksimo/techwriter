---
id: release-notes
title: Release notes
---

:::important Release date
May 10, 2022
:::

The goal of the patch is to add a new component, fix various performance and styling issues within the MT Builder and remove the vulnerabilities in third-party libraries and plugins used in the Product's components. To apply the patch, you must have Enterprise Edition v.10.1 installed. Refer to our [Upgrade guide](https://example.com) for detailed instructions.

**New features**

- Version 10.2 of the Enterprise Edition introduces integration with Pendo Analytics, a leading product digital adoption platform. Pendo is added into all components: Digital Workers, Control Tower, and WorkSpace, and runs both in on-premise and Cloud Product versions.

    This new integration is all about your user experience, and here's how it will benefit you:

    - **Simplified onboarding**: Pendo guides help new users quickly understand the Product's key features and functionalities, leading to a faster and more effective onboarding process.
    - **Easy feedback sharing**: share your thoughts and experiences easily using Pendo's in-app feedback mechanism. This will allow us better to understand your needs, expectations, and experiences and help continuously improve our services.
    - **Interactive help and support**: provides instant access to interactive help content and tutorials.
    - **Personalized user experience**: Pendo's insights allow us to personalize and improve your product experience by understanding how you use our Product, which features are the most valuable, and where to improve.

    Pendo also follows industry-standard security practices and complies with all relevant privacy laws and regulations, such as GDPR and CCPA, so all your data and processes stay on the safe side.

**Bugfixes**

- Fixed the bug with the tagged XML output of the Tagging-on-Document Manual Task.

    The issue affected the tasks created via any MT Builder, contained a document of at least six pages, and included the uploaded input data with the tagged XML. Now, the output XML includes tags from the input XML and the newly added ones, as designed.

- Fixed performance issues in the new MT Builder. Initializing the Review Manual Task in a custom Digital Worker could take up to 90 seconds. The loading speed of 40-page ToD documents and the extracted data is now decreased by 30%. You will also see the indicator showing the original documents being loaded.

- Fixed the issue with the vertical scroll in the Manual Task layout. The scroll wasn't rendered if elements were added above single- or multi-doc.
- Fixed the issue with the `answerType` for Date not being saved in the labeling configuration. When you create a document dataset with the Date component, the corresponding `answerType` is now saved and present in the request to the backend.

**Updates**

- ZooKeeper is updated to version 3.8.0 to remove vulnerable Log4j files.
- The Log4j dependency in the `logstash-output-jdbc` plugin is updated from version 1.1 to 2.17.2.

