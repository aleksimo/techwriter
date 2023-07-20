---
sidebar_position: 2
id: access
title: Grant access to Superset dashboards
tags: [Access & security]
---

Superset is an analytics tool that helps you monitor metrics related to Digital Workers. Superset is installed along the product, so you only need to configure access for users to start working with it. Once you install a new DW, its dashboard appears automatically in Control Tower.

To access Superset-based Digital Workers dashboards, in Control Tower, click the title, and in the dropdown box, click **Insights**.

To verify that a dashboard is ready for use, as an `admin` user, check the connection to databases and datasets:

1. On the Superset main screen, click **Settings** > **Database Connections**.

    - The **Databases** tab contains all your established connections to databases.

        ![](/img/samples/superset-db.png)

        Click the **Add Database** (+) button to create a new connection.

        >Here, Superset syncs with your deployed [Microsoft SQL server](https://example.com) and imports data from its tables.

    - On the **Datasets** tab, you can find the uploaded [datasets](https://example.com).

        ![](/img/samples/superset-dataset.png)

## Provide access to dashboards

Users must have access to both the data in dataset tables and the dashboard to see relevant analytics.

To provide access to data, do the following:

1. Go to the Superset main screen, click **Settings** > **Database Connections** > the **Datasets** tab.
2. Hold the pointer over the dataset line, and in the **Action** column, click the **Pencil** icon. The **Edit dataset** window appears.

    ![](/img/samples/edit-datasets.png)

    :::tip
    Alternatively, on the **Dashboard** screen, click **Edit dashboard** > **Edit properties**.
    :::

3. In the dataset window, go to the **Settings** tab, and in the **Owners** box, add or remove the access group.

    Currently, there are two access groups available:
    
    - **Superset admin** has full access to the Keycloak and the dashboards. These users can select the dashboards and provide access to them for specific users in the **read_only** group.
    - The **read_only** users can only view dashboards but can't alter them. These users can see only the dashboards to which they have access.

    ![](/img/samples/select_owners.png)

4. Click **Save**.

To provide access to a dashboard, do the following:

1. On the **Dashboards** screen, find a desired dashboard in the table, hold the pointer over the dashboard line, and in the **Action** column, click the **Pencil** icon.

    ![](/img/samples/superset_dashboards.png)

    The **Edit dashboard** window appears.

2. In the **Access** group, in the **Owners** box, add or remove the access group the same way as for the datasets.

    ![](/img/samples/dashboard_access.png)

## Set roles in Keycloak

:::important Only for on-premise installations
:::

Superset is automatically integrated with Keycloak and takes the roles and access permissions from there.

To check the existing roles, do the following:

1. In Keycloak, on the main menu, in the **Configure** group, click **Clients**, and in the list, click the **wf-superset** client. The client window appears.
2. Go to the **Roles** tab.

    The existing roles are presented here. To create another one, click **Create** and follow the [guide](https://example.com).

    ![](/img/samples/wf_superset_roles.png)

To assign the read-only role to a specific user, do the following:

1. On the Keycloak main menu, in the **Manage** group, click **Users**. The users' list appears.
2. In the list, click the user you want to assign a new Superset role and go to the **Role Mappings** tab.
3. In **Role Mappings**, in the **Client Roles** box, select your client, here, **wf-superset**.

    ![](/img/samples/role_mappings.png)

4. In the **Available Roles** box, select the **read-only** role and click **Add** to move it to the **Assigned Roles** box.

    If the user logs in for the first time, Superset communicates with the Keycloak. If the person is valid, Keycloak displays the assigned roles and provides access to Superset.

