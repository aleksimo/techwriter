---
id: install
title: Quick setup
tags: [Installation]
---

:::note
Before proceeding, ensure you have [prepared servers for installation](https://example.com) and executed the precheck script.
:::

## Prepare variables

To prepare the environment variables before the installation, connect to the Main server via SSH and in the *`PACKAGE_DIR`* directory (where the installer was extracted earlier, for example, **INSTALL_DIR/installer**), run the following command as *`WFUSER`*:

```bash
$ cd PACKAGE_DIR

$ export ANSIBLE_PRIVATE_KEY_FILE="</path_to_ssh_key>"
# Path to SSH key for connection to all Linux servers as WFUSER
$ export ANSIBLE_REMOTE_USER="WFUSER"
# WFUSER provided in config.yml
$ export ANSIBLE_VAULT_PASS="<ansible_vault_password>"
# Password for decryption of config.yml. If you don't set this variable, you'll be prompted for a password during setup.
```

## Install components

To install all components, on the Main server, run the following commands as *`WFUSER`*.

:::important
If *`WFUSER`* requires a password for the **sudo** privileges, add `'--ask-become-pass'` to the end of the command.

If *`WFUSER`* requires a password for the SSH authentication to other servers, add `'--ask-pass'` to the end of the command

```bash
$ ./install.sh <action> <component> --ask-become-pass
$ ./install.sh <action> <component> --ask-pass
$ ./install.sh <action> <component> --ask-become-pass --ask-pass
```
:::

```bash
$ ./install.sh install full     # Perform the Product installation
$ ./install.sh check full       # Verify that installation completed successfully
```

The installation is completed.

If the installation fails on any step, see the [troubleshooting guide](https://example.com).

### Skip particular component

You may skip the installation of a particular component if needed. For example, to skip the installation of the Analytics component, run the commands:

```bash
$ ./install.sh install full -e skip_bi=true
$ ./install.sh check full -e skip_bi=true

# Options description
# skip_rpa=true        # skips RPA components installation (they are optional for the Enterprise Edition)
# skip_bi=true         # skips BI (Analytics) components installation (this component is optional for the Enterprise Edition)
# skip_lb=true         # skips installation of the HAProxy service on the Main server (can be used ONLY if HAProxy is already installed)
# skip_agent=true      # skips AGENT components installation (can be used ONLY if the agent is already installed, for example, when re-running installation)
# skip_main=true       # skips main servers installation (can be used ONLY if the Main server is already installed, for example, when re-running installation)
# skip_ocr=true        # skips OCR component installation (this component is optional for the Enterprise Edition)
```

### Install particular components

When deploying components one by one, remember to run the following commands on the Main server as *`WFUSER`*.

#### Main server

To install the Main server components, run the following commands:

```bash
$ ./install.sh install main
```

#### Agent server

To install the Agent server components, run the following commands:

```bash
$ ./install.sh install agent
```

#### Check Main and Agent components

To check the Main and Agent server components, run the following commands:

```bash
$ ./install.sh check main
$ ./install.sh check agent
```

#### RPA server

To install the RPA components, run the following commands:

```bash
$ ./install.sh install rpa
```

#### Analytics server

To install the Analytics components, run the following commands:

```bash
$ ./install.sh install bi
$ ./install.sh check bi

# Analytics desktop installation to the BI server (optional).
$ ./install.sh install analytics-desktop
```

##### Install Superset

Starting from v.2, you can install the Superset server as an alternative solution for analytics.

:::important
Pay attention to the [Hardware and OS](https://example.com) and [Ports](https://example.com) pages in the **System requirements** section to prepare the infrastructure for the Superset installation properly.
:::

To install the Superset components, run the following command:

```bash
$ ./install.sh install superset
```

## Perform post-installation check

After the installation, check the Platform with Business Process (BP) and Manual Task. The OCR must be activated.

To import and run the health check Business process with the provided options, on the Main server, run the following command as *`WFUSER`*.

:::note
By default, all optional parameters (`test_<component>`) are set to 'false'.
:::

```bash
$ ./install.sh check main -e test_ml=true -e test_ocr=true -e test_rpa=true -e test_ie=true -e test_chrome=true -e test_desktop=true

# Options description
# test_ml=true      # Tests Machine Learning
# test_rpa=true     # Tests RPA server(s)
# test_ocr=true     # Tests OCR server(s).
# test_ie=true      # Tests Internet Explorer browser
# test_chrome=true  # Tests Chrome browser on RPA servers
# test_desktop=true # Tests Desktop driver on RPA servers
```