---
sidebar_position: 1
id: dw
title: Configure Skill
---

Once you install the Digital Worker (DW), configure it before running for the first time.

You can configure multiple variations, or sets of parameters, for a DW. For example, a different media provider or a set of keywords per variation. For more information, see the [release notes](https://example.com).

### Credentials

Before setting the news providers, ensure you have obtained the corresponding license with credentials.

The following search providers are supported:

- Google API
- Dow Jones Factiva Headlines
- LexisNexis L&P News v1
- World-Check One

You must acquire licenses and credentials for all providers except for Google API. The DW solution includes access to Google API at no additional cost.

You must first set up the above credentials in the Secrets Storage to use other providers besides Google API. For the step-by-step instructions, see this [guide](https://example.com).

### Input step

To set up your installed Digital Worker, do the following:

1. In the **Control Tower** menu, in the **Digital Workers** section, find your newly installed solution, and click the **Prepare** button.

    The **Prepare your digital worker** window containing a configuration form appears.

2. In the window, on the **Input** step, select a news provider for searching for news about the entity or individual. "Google API" is set by default.

    The required configurations may differ based on the selected news provider.

    ![](/img/samples/amm-config-input-v3.3.png)

The solution can return results from up to four providers at a time. When selecting several providers, each will appear in a separate, collapsible section. Review each section carefully to ensure all required parameters are configured correctly. Available parameters may vary by provider.

![](/img/samples/search-providers.png)

See the following sections for a detailed description of the Google provider setting.

#### Google API

![](/img/samples/amm-ui-google-input.jpg)

- **Google API Credentials Location**. Specify the corresponding Secret Storage alias for the Google API system.
- **Article Language**. Select the language of articles to search in. 'Any' language is used by default. You can also choose **Keyword Language** and its following options:

    - **Shared** creates a single input field for keywords.
    - **Defined by keyword language**

- **Number of articles to extract**. Specify the maximum number of reports to fetch from 1 to 20. By default, up to **20** articles are retrieved.
- **Search Time period**. Select an option to find information published during a specific time frame. To specify the starting and the ending date for the articles' search, select **Custom Range**.
- **Dynamic Location Search**. Select to dynamically broaden the search location for an entity if no results were found.
- **Keywords**. Specify keywords to be used for the search. You can add a maximum of 28 words.

    The following keywords are added by default based on the article languages you select:

    - English:

        ```text
        ACCUSE, ARREST, BRIBE, CONVICT, CORRUPT, COUNTERFEIT, CRIME, EMBEZZLEMENT, FRAUD, GUILT, ILLEGAL, INDICTMENT, INVESTIGATION, KICKBACK, MONEY LAUNDERING, NARCOTIC, PENALTY, SANCTION, SENTENCED, EVASION, TERRORIST, THEFT, TRAFFICKING, VIOLATION
        ```

    - Spanish:

        ```text
        ACUSAR, ARRESTAR, SOBORNO, CORRUPTO, FALSIFICACIÓN, CRIMEN, MALVERSACIÓN, FRAUDE, CULPA, ILEGAL, ACUSACIÓN, INVESTIGACIÓN, CONTRAGOLPE, LAVADO DE DINERO, NARCÓTICO, MULTA, SANCIÓN, SENTENCIADO, EVASIÓN, TERRORISTA, ROBO, TRÁFICO, VIOLACIÓN
        ```

- **Enable Keyword Thesaurus**. Activate to look not only for exact keywords but also for their synonyms. By default, the feature is turned on. Disable it if your organization requires only exact matches on all keywords.
- **High-risk countries**. Select countries from the dropdown or enter their names in the search field. The high-risk countries configured here are highlighted in articles returned from each investigation.
- **File types to exclude from results**. Select the file types that you want to exclude from Google results:

    - HTML is included by default.
    - Non-HTML file types do not have the same metadata and tagging. Excluding them reduces the number of articles to review and false hits by 50% without increasing the risk of missing a true hit.

### Investigation step

After setting the Input parameters, click **Next** to go to the following step of the wizard.

- **ML Model Version**. Select the model version to use. The latest model is selected by default.

- **Identify Duplicate Articles**. Select **Yes** to identify and group articles by the configurable similarity threshold. By default, the value is set to 50%.
- **Remove Legal Endings**. Select **Yes** to remove legal endings from the company entities. Entities with common names or small businesses (LLCs, S corps) may receive more tailored results when the option is set to **No**.

- **Human-in-the-Loop**. Select **Yes** to enable the Manual Review Step. If the option is on, configure the additional options:

    - **Frequency of use**. Specify how frequently a Manual Task is created when at least one result per entity is found.
    - **Require users to disposition all articles**. Select **Yes** if users are required to disposition all articles before closing an investigation in WorkSpace.
    - **Automatically route users to the next task**. Select **Yes** to direct users to the next task in the queue. If the option is disabled, the users are always returned to the main queue list after closing or saving an assignment.

- **Number of submit investigation tasks**. When running the Launcher Business Process, specify how many "Submit Investigation Tasks" you want to create. One task is suggested for two or three analysts.

![](/img/samples/amm-config-investigation.png)

### Output step

In the last step, specify the **Output** parameters:

- **Interface Language**. Select the language of the final report and Manual Tasks.
- **Report Format**. Select the report file format for generating a screening request: HTML or PDF.

![](/img/samples/amm-config-output.jpg)

### Review

Once you complete the required fields, review the configuration. You can return to any step to change previous settings before finalizing. If everything looks correct, click **Finish**. You are now ready to use the Adverse Media Monitoring skill.
