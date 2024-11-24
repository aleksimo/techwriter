---
sidebar_position: 4
id: portal
title: Documentation portal
---

This website also serves as an example of my work within the Docs as Code paradigm. I have used the Docusaurus static site generator for the past four years as the documentation engine.

![Documentation portal](/img/website.png)

Here's how the typical documentation flow is organized:

1. I create the first draft of an article in the Markdown format inside the specific branch in a local repository.
2. Once the draft is finished, I commit and push the article to the remote repository and make a Pull Request from my branch to the Develop one. Inside the PR, I tag my fellow writers and stakeholders to notify them about changes and ask them to review the article.
3. If all is good, the reviewers approve the Pull Request, and I'm good to merge it into the Develop branch.
4. Once the changes appear in the branch, the Jenkins CI/CD tool triggers automatically and runs a documentation-building job consisting of three steps:

    1. Check the changes out of the repository and place the content inside the internal Workspace.
    2. Run the Documentation building command. Usually, it's `npm run build` for the Docusaurus-based websites. This command produces the artifact in the form of multiple HTML files and associated assets.
    3. The artifact is deployed to the prepared staging instance.

    From now on, I can see how the updated website will look for the clients and check for visual or structural issues.

5. If everything looks good, I repeat steps 3-4, but this time, I create a Pull request from the Develop to the Master branch.
6. After the building job finishes successfully, the applied changes appear on the client's Documentation Portal.

The documentation is configured and styled only once, so I don't need to adjust parameters often. Sometimes, I request assistance from DevOps engineers and administrators in setting up repositories, CI/CD tools, and web servers.
