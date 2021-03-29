Advanced Guide
==============

::: {.contents local="" depth="1"}
:::

Road map
--------

There are many tools, packages, and scripts that can be used to manage
Braiins OS+. For better navigation, use the following tree:

> -   Install Braiins OS+
>
> > -   Using BOS Toolbox (`bosbox_install`{.interpreted-text
> >     role="ref"})
> > -   Using web package (`web_package_install`{.interpreted-text
> >     role="ref"})
> > -   Using SD card (`sd_install`{.interpreted-text role="ref"})
> > -   Using SD card and miner tool
> >     (`miner_nand_install`{.interpreted-text role="ref"})
> > -   Using SSH scripts (`ssh_package_install`{.interpreted-text
> >     role="ref"})
>
> -   Unlock SSH on Antminer S9
>
> > -   Using BOS Toolbox (`bosbox_unlock`{.interpreted-text
> >     role="ref"})
>
> -   Update Braiins OS+
>
> > -   Using BOS Toolbox (`bosbox_update`{.interpreted-text
> >     role="ref"})
> > -   Using OPKG (`opkg_update`{.interpreted-text role="ref"})
> > -   Using sysupgrade package
> >     (`sysupgrade_switch_braiinsplus`{.interpreted-text role="ref"})
> > -   Using bos2bos script (`bos2bos`{.interpreted-text role="ref"})
>
> -   Switching to Braiins OS (version without autotuning)
>
> > -   Using sysupgrade package
> >     (`sysupgrade_switch_braiinsos`{.interpreted-text role="ref"})
> > -   Using bos2bos script (`bos2bos`{.interpreted-text role="ref"})
>
> -   Switching to Braiins OS+ (version with autotuning)
>
> > -   Using OPKG (`opkg_switch_to_braiinsplus`{.interpreted-text
> >     role="ref"})
> > -   Using sysupgrade package
> >     (`sysupgrade_switch_braiinsplus`{.interpreted-text role="ref"})
> > -   Using bos2bos script (`bos2bos`{.interpreted-text role="ref"})
>
> -   Reset to initial Braiins OS version (version, which was installed
>     for the first time on device) - factory reset
>
> > -   Using OPKG (`opkg_factory_reset`{.interpreted-text role="ref"})
> > -   Using SD card (`sd_factory_reset`{.interpreted-text role="ref"})
> > -   Using \"miner\" tool (`miner_factory_reset`{.interpreted-text
> >     role="ref"})
> > -   Using bos2bos script (`bos2bos`{.interpreted-text role="ref"})
>
> -   Uninstall Braiins OS+
>
> > -   Using BOS Toolbox (`bosbox_uninstall`{.interpreted-text
> >     role="ref"})
> > -   Using SSH scripts (`ssh_package_uninstall`{.interpreted-text
> >     role="ref"})
>
> -   Turn on/off Nightly feeds
>
> > -   Using \"miner\" tool (`miner_nightly`{.interpreted-text
> >     role="ref"})
>
> -   Turn on/off auto-upgrade
>
> > -   Using \"miner\" tool (`miner_autoupgrade`{.interpreted-text
> >     role="ref"})
>
> -   Run custom shell commands on the miner
>
> > -   Using BOS Toolbox (`bosbox_command`{.interpreted-text
> >     role="ref"})

BOS Toolbox {#bosbox}
-----------

BOS Toolbox is a new tool that allows users to easily install,
uninstall, update, detect, configure Braiins OS and run custom commands
on the device. It also enables commands to be executed in batch mode,
which makes the management of a larger number of devices easier. BOS
Toolbox also automatically download the latest firmware. This is the
recommended way to manage your machines.

### Usage

> -   Download the **BOS Toolbox** from our
>     [website](https://braiins-os.com/).
> -   Create a new text file, change the \".txt\" ending to \".csv\" and
>     insert the IP addresses on which you want execute the commands.
>     Put that file in the directory where the BOS Toolbox is located.
>     **Use only one IP address per line!**
> -   Follow the sections bellow

### Features, PROs and CONs of this method:

> -   installs Braiins OS+ remotely and automatically unlocks SSH on
>     Antminer S9 during the installation
> -   updates Braiins OS+ remotely
> -   uninstalls Braiins OS+ remotely
> -   configures Braiins OS+ remotely
> -   runs custom commands on machines
> -   scans the network for machines
> -   migrates the whole configuration by default (can be adjusted) when
>     installing Braiins OS+
> -   migrates the network configuration by default (can be adjusted)
>     when uninstalling Braiins OS+
> -   parameters are available to customize the process
> -   turns on autotuning on default power limit when installing Braiins
>     OS+
> -   batch mode available to manage multiple devices at once
> -   easy to use
> -   does not work on X17 devices with locked SSH

### Install Braiins OS+ using BOS Toolbox {#bosbox_install}

> -   Download **BOS Toolbox** from our
>     [website](https://braiins-os.com/plus/download/).
> -   Create a new text file, change the \".txt\" ending to \".csv\" and
>     insert the IP addresses on which you want execute the commands.
>     Put that file in the directory where the BOS Toolbox is located.
>     **Use only one IP address per line!**
> -   Once you have downloaded BOS Toolbox, open your command-line
>     interpreter (e.g. CMD for Windows, Terminal for Ubuntu, etc.)
> -   Replace the *FILE\_PATH\_TO\_BOS\_TOOLBOX* placeholder in the
>     command below with the actual file path where you saved the BOS
>     Toolbox. Then switch to that file path by running the command: :
>
>         cd FILE_PATH_TO_BOS_TOOLBOX
>
> -   Now replace the *listOfMiners.csv* placeholder with your file name
>     in the command below and run the appropriate command for your
>     operating system:
>
>     For **Windows** command terminal: :
>
>         bos-toolbox.bat install ARGUMENTS HOSTS
>
>     For **Linux** command terminal: :
>
>         ./bos-toolbox install ARGUMENTS HOSTS
>
>     **Note:** *when using BOS Toolbox for Linux, you need to make it
>     executable with the following command (this has to be done only
>     once):* :
>
>         chmod u+x ./bos-toolbox
>
You can use the following **arguments** to adjust the process:

**Important note:** When installing Braiins OS+ on a **single device**,
replace the *HOSTS* argument with an IP address. When installing Braiins
OS+ on **multiple devices**, replace the *HOSTS* argument with the path
to the file containing the IP addresses.

  Arguments                                  Description
  ------------------------------------------ ------------------------------------------------------------------------------------
  -h, \--help                                show this help message and exit
  \--open-source use                         for installation open source version (exclusive with **nightly** and **feed-url**)
  \--nightly use                             for installation nightly version (exclusive with **open-source** and **feed-url**)
  \--feeds-url \[FEEDS\_URL\] over           ride default feeds server URL (exclusive with **open-source** and **nightly**)
  \--fw-version \[FW\_VERSION\] sele         ct specific firmware version
  \--backup                                  do miner backup before upgrade
  \--no-auto-upgrade                         turn off auto-upgrade of installed firmware
  \--no-nand-backup                          skip full NAND backup (config is still being backed up)
  \--pool-user \[POOL\_USER\]                set username and workername for default pool
  \--psu-power-limit \[PSU\_POWER\_LIMIT\]   set PSU power limit (in watts)
  \--no-keep-network                         do not keep miner network configuration (use DHCP)
  \--no-keep-pools                           do not keep miner pool configuration
  \--no-keep-hostname                        do not keep miner hostname and generate new one based on MAC
  \--keep-hostname                           force to keep any miner hostname
  \--no-wait                                 do not wait until system is fully upgraded
  \--dry-run                                 do all upgrade steps without actual upgrade
  \--post-upgrade \[POST\_UPGRADE\]          path to directory with stage3.sh script
  \--bos-mgmt-id \[BOS\_MGMT\_ID\] set       BOS management identifier
  -p PASSWORD, \--password PASSWORD          administration password

**Example:**

    bos-toolbox.bat install --psu-power-limit 1200 --password root listOfMiners.csv

This command will install Braiins OS+ on the miners, that are specified
in the *listOfMiners.csv* file and set the power limit to 1200 on all of
them. The command will also automatically unlock the Antminer S9.

### Update Braiins OS+ using BOS Toolbox {#bosbox_update}

> -   Download the **BOS Toolbox** from our
>     [website](https://braiins-os.com/plus/download/).
> -   Create a new text file, change the \".txt\" ending to \".csv\" and
>     insert the IP addresses on which you want execute the commands.
>     Put that file in the directory where the BOS Toolbox is located.
>     **Use only one IP address per line!**
> -   Once you have downloaded BOS Toolbox, open your command-line
>     interpreter (e.g. CMD for Windows, Terminal for Ubuntu, etc.)
> -   Replace the *FILE\_PATH\_TO\_BOS\_TOOLBOX* placeholder in the
>     command below with the actual file path where you saved the BOS
>     Toolbox. Then switch to that file path by running the command: :
>
>         cd FILE_PATH_TO_BOS_TOOLBOX
>
> -   Now replace the *listOfMiners.csv* placeholder with your file name
>     in the command below and run the appropriate command for your
>     operating system:
>
>     For **Windows** command terminal: :
>
>         bos-toolbox.bat update ARGUMENTS HOSTS PACKAGE
>
>     For **Linux** command terminal: :
>
>         ./bos-toolbox update ARGUMENTS HOSTS PACKAGE
>
>     **Note:** *when using BOS Toolbox for Linux, you need to make it
>     executable with the following command (this has to be done only
>     once):* :
>
>         chmod u+x ./bos-toolbox
>
You can use the following **arguments** to adjust the process:

**Important note:** When updating Braiins OS+ on a **single device**,
replace the *HOSTS* argument with an IP address. When updating Braiins
OS+ on **multiple devices**, replace the *HOSTS* argument with the path
to the file containing the IP addresses. *PACKAGE* is optional. Use only
for updating a different package than *firmware*.

+-----------------------------------+---------------------------------+
| Arguments                         | Description                     |
+===================================+=================================+
| \--h, \--help                     | show this help message and exit |
+-----------------------------------+---------------------------------+
| -p PASSWORD, \--password PASSWORD | administration password         |
+-----------------------------------+---------------------------------+
| -i, \--ignore                     | no halt on errors               |
+-----------------------------------+---------------------------------+
| PACKAGE package name              | > for update                    |
+-----------------------------------+---------------------------------+

**Example:**

    bos-toolbox.bat update listOfMiners.csv

This command will look for an update for the miners, that are specified
in the *listOfMiners.csv* and update them if there is a new version of
firmware.

### Uninstall Braiins OS+ using BOS Toolbox {#bosbox_uninstall}

> -   Download the **BOS Toolbox** from our
>     [website](https://braiins-os.com/plus/download/).
> -   Create a new text file in your text editor and insert the IP
>     addresses on which you want execute the commands. **Use only one
>     IP address per line!** (Note that you can find the IP address in
>     the Braiins OS+ web interface by going to *Status -\> Overview*.)
>     Then save the file in the same directory as you saved the BOS
>     Toolbox and change the \".txt\" ending to \".csv\".
> -   Once you have downloaded BOS Toolbox and saved the .csv file, open
>     your command-line interpreter (e.g. CMD for Windows, Terminal for
>     Ubuntu, etc.).
> -   Replace the *FILE\_PATH\_TO\_BOS\_TOOLBOX* placeholder in the
>     command below with the actual file path where you saved the BOS
>     Toolbox. Then switch to that file path by running the command: :
>
>         cd FILE_PATH_TO_BOS_TOOLBOX
>
> -   Now replace the *listOfMiners.csv* placeholder with your file name
>     in the command below and run the appropriate command for your
>     operating system:
>
>     For **Windows** command terminal: :
>
>         bos-toolbox.bat uninstall ARGUMENTS HOSTS BACKUP_PATH
>
>     For **Linux** command terminal: :
>
>         ./bos-toolbox uninstall ARGUMENTS HOSTS BACKUP_PATH
>
>     **Note:** *when using BOS Toolbox for Linux, you need to make it
>     executable with the following command (this has to be done only
>     once):* :
>
>         chmod u+x ./bos-toolbox
>
You can use the following **arguments** to adjust the process:

**Important note:** When uninstalling Braiins OS+ on a **single
device**, replace the *HOSTS* argument with an IP address. When
uninstalling Braiins OS+ on **multiple devices**, replace the *HOSTS*
argument with the path to the file containing the IP addresses.
*BACKUP\_PATH* is optional. Use only in conjuction with
*\--nand-restore* argument.

+-----------------------------------+-----------------------------------+
| Arguments                         | Description                       |
+===================================+===================================+
| -h, \--help                       | show this help message and exit   |
+-----------------------------------+-----------------------------------+
| -p PASSWORD, \--password PASSWORD | ssh password for installation     |
+-----------------------------------+-----------------------------------+
| \--feeds-url \[FEEDS\_URL\]       | > override default feeds server   |
|                                   | > URL                             |
+-----------------------------------+-----------------------------------+
| \--nand-restore                   | > use full NAND restore from      |
|                                   | > previous backup                 |
+-----------------------------------+-----------------------------------+
| BACKUP\_PATH                      | path to directory or tgz file     |
|                                   | with data for miner restore       |
+-----------------------------------+-----------------------------------+

**Example:**

    bos-toolbox.bat uninstall listOfMiners.csv

This command will uninstall Braiins OS+ from the miners, that are
specified in the *listOfMiners.csv* file and install a default stock
firmware.

**Warning:** The stock firmware that\'s installed when you uninstall
Braiins OS+ is not suitable for mining! Upgrade to a newer version of
stock firmware for your specific hardware model before you start mining.

### Configure Braiins OS+ using BOS Toolbox {#bosbox_configure}

> -   Download the **BOS Toolbox** from our
>     [website](https://braiins-os.com/plus/download/).
> -   Create a new text file in your text editor and insert the IP
>     addresses on which you want execute the commands. **Use only one
>     IP address per line!** (Note that you can find the IP address in
>     the Braiins OS+ web interface by going to *Status -\> Overview*.)
>     Then save the file in the same directory as you saved the BOS
>     Toolbox and change the \".txt\" ending to \".csv\".
> -   Once you have downloaded BOS Toolbox and saved the .csv file, open
>     your command-line interpreter (e.g. CMD for Windows, Terminal for
>     Ubuntu, etc.).
> -   Replace the *FILE\_PATH\_TO\_BOS\_TOOLBOX* placeholder in the
>     command below with the actual file path where you saved the BOS
>     Toolbox. Then switch to that file path by running the command: :
>
>         cd FILE_PATH_TO_BOS_TOOLBOX
>
> -   Now replace the *listOfMiners.csv* placeholder with your file name
>     in the command below and run the appropriate command for your
>     operating system:
>
>     For **Windows** command terminal: :
>
>         bos-toolbox.bat config ARGUMENTS ACTION TABLE
>
>     For **Linux** command terminal: :
>
>         ./bos-toolbox config ARGUMENTS ACTION TABLE
>
>     **Note:** *when using BOS Toolbox for Linux, you need to make it
>     executable with the following command (this has to be done only
>     once):* :
>
>         chmod u+x ./bos-toolbox
>
You can use the following **arguments** to adjust the process:

  Arguments                           Description
  ----------------------------------- -----------------------------------------------------------
  -h, \--help                         show this help message and exit
  -u USER, \--user USER               administration username
  -p PASSWORD, \--password PASSWORD   administration password or \"prompt\"
  \--change-password allow ch         anging password (to one stated in the *listOfMiners.csv*)
  -c, \--check                        dry run sans writes
  -i, \--ignore                       no halt on errors

You **have to use one** of the following **actions** to adjust the
process:

  Arguments     Description
  ------------- ----------------------------------------------------------------------------------------------------------
  load          load the current configuration of the miners (specified in the CSV file) and insert them to the CSV file
  save          save the settings from the CSV file to the miners (this does not apply them)
  apply         apply the settings, which were copied from the CSV file to the miners
  save\_apply   save and apply the settings from the CSV file to the miners

**Example:**

    bos-toolbox.bat config --user root load listOfMiners.csv

    #edit the CSV file using a spreadsheet editor (e.g. Office Excel, LibreOffice Calc, etc.)

    bos-toolbox.bat config --user root -p admin --change-password save_apply listOfMiners.csv

The first command will load the configuration of the miners, that are
specified in the *listOfMiners.csv* (using the login username *root*)
and save it to the CSV file. You can now open the file and edit what you
need. After the file was edited, the second command will copy the
settings back to the miners, apply them and change the password to one
in the password column.

### Scan the network to identify miners using BOS Toolbox {#bosbox_scan}

> -   Download the **BOS Toolbox** from our
>     [website](https://braiins-os.com/plus/download/).
> -   Create a new text file in your text editor and insert the IP
>     addresses on which you want execute the commands. **Use only one
>     IP address per line!** (Note that you can find the IP address in
>     the Braiins OS+ web interface by going to *Status -\> Overview*.)
>     Then save the file in the same directory as you saved the BOS
>     Toolbox and change the \".txt\" ending to \".csv\".
> -   Once you have downloaded BOS Toolbox and saved the .csv file, open
>     your command-line interpreter (e.g. CMD for Windows, Terminal for
>     Ubuntu, etc.).
> -   Replace the *FILE\_PATH\_TO\_BOS\_TOOLBOX* placeholder in the
>     command below with the actual file path where you saved the BOS
>     Toolbox. Then switch to that file path by running the command: :
>
>         cd FILE_PATH_TO_BOS_TOOLBOX
>
> -   Now replace the *listOfMiners.csv* placeholder with your file name
>     in the command below and run the appropriate command for your
>     operating system:
>
>     For **Windows** command terminal: :
>
>         bos-toolbox.bat discover ARGUMENTS
>
>     For **Linux** command terminal: :
>
>         ./bos-toolbox discover ARGUMENTS
>
>     **Note:** *when using BOS Toolbox for Linux, you need to make it
>     executable with the following command (this has to be done only
>     once):* :
>
>         chmod u+x ./bos-toolbox
>
You can use the following **arguments** to adjust the process:

  Arguments     Description
  ------------- ---------------------------------
  -h, \--help   show this help message and exit

You **have to use one** of the following **arguments** to adjust the
process:

  Arguments   Description
  ----------- -----------------------------------------------------------------------------------
  scan        actively scan provided range of address
  listen      listen for incoming broadcast from devices (when the IP report button is pressed)

  Optional Arguments - scan     Description
  ----------------------------- -------------------------------------------------------------
  -h, \--help                   show this help message and exit
  \--passwords PASSWORDS        path to file with list of possible passwords for connection
  -o OUTPUT, \--output OUTPUT   save list of found IP addresses to file
  -j JOBS, \--jobs JOBS         number of concurrent jobs to scan network
  -v, \--verbose                Report networking errors

  Optional Arguments - listen   Description
  ----------------------------- ----------------------------------------------------------------------------------------------------------------------------
  -h, \--help                   show this help message and exit
  -o OUTPUT, \--output OUTPUT   save list of found IP addresses to file
  \--format FORMAT              change default formatting string for device information; the tags \'{IP}\' and \'{MAC}\' will be replaced with actual data

**Example:**

    #scan the network, in the range 10.10.10.0 - 10.10.10.255
    bos-toolbox.bat discover scan 10.10.10.0/24

    #scan the network, in the range 10.10.0.0 - 10.10.255.255
    bos-toolbox.bat discover scan 10.10.0.0/16

    #scan the network, in the range 10.0.0.0 - 10.255.255.255
    bos-toolbox.bat discover scan 10.0.0.0/8

### Run custom commands on miners using BOS Toolbox {#bosbox_command}

> -   Download the **BOS Toolbox** from our
>     [website](https://braiins-os.com/plus/download/).
> -   Create a new text file in your text editor and insert the IP
>     addresses on which you want execute the commands. **Use only one
>     IP address per line!** (Note that you can find the IP address in
>     the Braiins OS+ web interface by going to *Status -\> Overview*.)
>     Then save the file in the same directory as you saved the BOS
>     Toolbox and change the \".txt\" ending to \".csv\".
> -   Once you have downloaded BOS Toolbox and saved the .csv file, open
>     your command-line interpreter (e.g. CMD for Windows, Terminal for
>     Ubuntu, etc.).
> -   Replace the *FILE\_PATH\_TO\_BOS\_TOOLBOX* placeholder in the
>     command below with the actual file path where you saved the BOS
>     Toolbox. Then switch to that file path by running the command: :
>
>         cd FILE_PATH_TO_BOS_TOOLBOX
>
> -   Now replace the *listOfMiners.csv* placeholder with your file name
>     in the command below and run the appropriate command for your
>     operating system:
>
>     For **Windows** command terminal: :
>
>         bos-toolbox.bat command ARGUMENTS TABLE COMMAND
>
>     For **Linux** command terminal: :
>
>         ./bos-toolbox command ARGUMENTS TABLE COMMAND
>
>     **Note:** *when using BOS Toolbox for Linux, you need to make it
>     executable with the following command (this has to be done only
>     once):* :
>
>         chmod u+x ./bos-toolbox
>
You can use the following **arguments** to adjust the process:

  Arguments                           Description
  ----------------------------------- ---------------------------------
  -h, \--help                         show this help message and exit
  -a, \--auto                         Use ssh if rpc is not available
  -l, \--legacy                       Use ssh
  -L, \--no-legacy                    Use rpc
  -o, \--output                       Capture and print remote output
  -O, \--output-hostname              Capture and print remote output
  -p PASSWORD, \--password PASSWORD   Administration password
  -j JOBS, \--jobs JOBS               number of concurrent jobs

You **have to use one** of the following **command** to adjust the
process:

  Commands                   Description
  -------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------
  start                      Start BOSminer
  stop                       Stop BOSminer
  *custom\_shell\_command*   Replace *custom\_shell\_command* with your own shell command (e.g. *cat /etc/bosminer.toml* to show the content of the *bosminer.toml* configuration file)

**Example:**

    #stop BOSminer, effectively stopping mining and decreasing the power draw to minimum
    bos-toolbox.bat command -o list.csv stop

### Unlock SSH on Antminer S9 using BOS Toolbox {#bosbox_unlock}

**Note:** The unlock functionality is a part of the installation process
and is done automatically.

> -   Download the **BOS Toolbox** from our
>     [website](https://braiins-os.com/plus/download/).
> -   Create a new text file, change the \".txt\" ending to \".csv\" and
>     insert the IP addresses on which you want execute the commands.
>     Put that file in the directory where the BOS Toolbox is located.
>     **Use only one IP address per line!**
> -   Once you have downloaded BOS Toolbox, open your command-line
>     interpreter (e.g. CMD for Windows, Terminal for Ubuntu, etc.)
> -   Replace the *FILE\_PATH\_TO\_BOS\_TOOLBOX* placeholder in the
>     command below with the actual file path where you saved the BOS
>     Toolbox. Then switch to that file path by running the command: :
>
>         cd FILE_PATH_TO_BOS_TOOLBOX
>
> -   Now replace the *listOfMiners.csv* placeholder with your file name
>     in the command below and run the appropriate command for your
>     operating system:
>
>     For **Windows** command terminal: :
>
>         bos-toolbox.bat unlock ARGUMENTS HOSTS
>
>     For **Linux** command terminal: :
>
>         ./bos-toolbox unlock ARGUMENTS HOSTS
>
>     **Note:** *when using BOS Toolbox for Linux, you need to make it
>     executable with the following command (this has to be done only
>     once):* :
>
>         chmod u+x ./bos-toolbox
>
You can use the following **arguments** to adjust the process:

**Important note:** When updating Braiins OS+ on a **single device**,
replace the *HOSTS* argument with an IP address. When updating Braiins
OS+ on **multiple devices**, replace the *HOSTS* argument with the path
to the file containing the IP addresses.

  Arguments                           Description
  ----------------------------------- ---------------------------------
  \--h, \--help                       show this help message and exit
  -u USERNAME, \--username USERNAME   username for webinterface
  -p PASSWORD, \--password PASSWORD   password for webinterface
  \--port PORT                        port of antminer webinterface
  \--ssl                              whether to use SSL

**Example:**

    bos-toolbox.bat unlock -u root -p root listOfMiners.csv

This command will unlock SSH on the miners, that are specified in the
*listOfMiners.csv*.

Web Package {#web_package}
-----------

The Web package can be used to switch from stock firmware, which was
released before 2019. It should also work on other stock-based
firmwares. This package cannot be used on stock firmware, released in
2019 and later, because of the signature verification, that was
implemented. The signature verification prevents the usage of other than
original stock firmwares.

### Usage

> -   Download the **Web Package** from our
>     [website](https://braiins-os.com/).
> -   Follow the sections bellow

### Features, PROs and CONs of this method:

> -   replaces stock firmware with Braiins OS+ without additional tools
> -   migrates the network configuration
> -   migrates pool URLs, users and passwords
> -   turns on autotuning on default power limit
> -   cannot be used on stock firmware released in 2019 and later
> -   cannot configure the installation (e.g. it will always migrate the
>     network settings)
> -   no batch-mode (unless you create your own scripts)

### Install Braiins OS+ using Web package {#web_package_install}

> -   Download the **Web Package** from our
>     [website](https://braiins-os.com/).
> -   Log-in on your miner and go to the section *System -\> Upgrade*.
> -   Upload the downloaded package and flash the image.

SD card image {#sd}
-------------

If you are running stock firmware, which was released in 2019 and later,
the only way to install Braiins OS+ is to insert an SD card with Braiins
OS+ flashed on it. In 2019, the SSH connection was locked and the
signature verification in the web interface prevents the usage of other
than stock firmware usage.

### Usage

> -   Download the **SD card image** from our
>     [website](https://braiins-os.com/).
> -   Follow the sections bellow

### Features, PROs and CONs of this method:

> -   replaces SSH locked stock firmware with Braiins OS+
> -   uses the network configuration stored on the NAND (this can be
>     turned off, see the section *Network settings* bellow)
> -   turns on autotuning on default power limit
> -   does not migrate pool URLs, users and passwords
> -   no batch-mode

### Install Braiins OS+ using SD card {#sd_install}

> -   Download the SD card image from our
>     [website](https://braiins-os.com/).
> -   Flash the downloaded image on an SD card (e.g. using
>     [Etcher](https://etcher.io/)). *Note: Simple copy to SD card will
>     not work. The SD card has to be flashed!*
> -   **(Antminer S9 only)** Adjust the jumpers to boot from SD card
>     (instead of NAND memory), as shown below.
>
> -   Insert the SD card into the device, then start the device.
> -   If the auto-install version of SD image was used, the system will
>     be automatically installed to the internal memory (NAND). The
>     installation is completed, once both LEDs start to blink at the
>     same time. After the installation completes, remove the SD card to
>     boot Braiins OS+ from the NAND.
> -   After a moment, you should be able to access the Braiins OS+
>     interface through the device's IP address.

### Network settings {#sd_network}

> By default, network configuration stored on the NAND is used, while
> running Braiins OS+ from an SD card. This feature can be turned off,
> by following the steps bellow:
>
> > -   Mount the first FAT partition of the SD card
> > -   Open the file uEnv.txt and insert the following string (make
> >     sure there is only one string per line)
> >
> > <!-- -->
> >
> >     cfg_override=no

Disabling usage of old network settings is beneficial for the users,
that have problems with the miner not being visible in the network (e.g.
static IP address used on NAND is out of range of the network). By doing
so, DHCP is used.

### NAND install {#sd_nand_install}

The SD card can be used to replace the firmware running on NAND with Braiins OS+. This can be done either:

:   -   using the web interface - section *System -\> Install current
        system to device (NAND)*
    -   using the *miner* tool, via SSH - follow this section of the
        guide `miner_nand_install`{.interpreted-text role="ref"}
    -   Add `nand_install=yes` to the `uEnv.txt` file for automatic NAND
        installation.

### Braiins OS+ factory reset using SD card {#sd_factory_reset}

You can do a factory reset, by following the steps bellow:

> -   Mount the first FAT partition of the SD card
> -   Open the file uEnv.txt and insert the following string (make sure
>     there is only one string per line)
>
> <!-- -->
>
>     factory_reset=yes

Remote (SSH) install package {#ssh_package}
----------------------------

With the *Remote (SSH) install package* you can install or uninstall
Braiins OS+. This method is not recommended, as it requires a Python
setup. Use the BOS Toolbox instead.

### Usage

> -   Download the **Remote (SSH) install package** from our
>     [website](https://braiins-os.com/).
> -   Follow the sections bellow

### Features, PROs and CONs of this method:

> -   installs Braiins OS+ remotely
> -   uninstalls Braiins OS+ remotely
> -   migrates the whole configuration by default (can be adjusted) when
>     installing Braiins OS+
> -   migrates the network configuration by default (can be adjusted)
>     when uninstalling Braiins OS+
> -   parameters are available to customize the process
> -   turns on autotuning on default power limit when installing Braiins
>     OS+
> -   no batch-mode (unless you create your own scripts)
> -   requires a long setup
> -   does not work on miner with locked SSH

### Preparing the environment {#ssh_package_environment}

First, you need to prepare the Python environment. This consists of the
following steps:

-   *(Only Windows)* Install *Ubuntu for Windows 10* available from the
    Microsoft Store
    [here.](https://www.microsoft.com/en-us/store/p/ubuntu/9nblggh4msv6)
-   Run the following commands in your command line terminal:

*(Note that the commands are compatible with Ubuntu and Ubuntu for
Windows 10. If you are using a different distribution of Linux or a
different OS, please check the corresponding documentation and edit the
commands as necessary.)*

    #Update the repositories and install dependencies
    sudo apt update && sudo apt install python3 python3-virtualenv virtualenv

    #Download and extract the firmware package
    #Antminer S9
    wget -c https://feeds.braiins-os.com/20.10/braiins-os_am1-s9_ssh_2020-10-25-0-908ca41d-20.10-plus.tar.gz -O - | tar -xz

    #Antminer S17
    wget -c https://feeds.braiins-os.com/20.11/braiins-os_am2-s17_ssh_2020-11-27-0-5eb922d4-20.11-plus.tar.gz -O - | tar -xz

    #Change the directory to the unpacked firmware folder
    #Antminer S9
    cd ./braiins-os_am1-s9_ssh_VERSION

    #Antminer S17
    cd ./braiins-os_am2-s17_ssh_VERSION

    #Create a virtual environment and activate it
    virtualenv --python=/usr/bin/python3 .env && source .env/bin/activate

    #Install the required Python packages
    python3 -m pip install -r requirements.txt

### Install Braiins OS+ using SSH package {#ssh_package_install}

Installation of Braiins OS+ using the so-called *SSH Method* consists of
the following steps:

-   *(Custom Firmware)* Flash stock firmware. This step can be skipped
    if the device is running on stock firmware or on a previous versions
    of Braiins OS. *(Note: It is possible, that Braiins OS+ can be
    installed directly over a custom firmware, but as they differ from
    the stock version, it might be necessary to flash stock firmware
    first.)*
-   *(Only Windows)* Install *Ubuntu for Windows 10* available from the
    Microsoft Store
    [here.](https://www.microsoft.com/en-us/store/p/ubuntu/9nblggh4msv6)
-   Prepare the Python environment, which is described in the section
    `ssh_package_environment`{.interpreted-text role="ref"}.
-   Run the following commands in your command line terminal (replace
    the placeholder `IP_ADDRESS` accordingly) :

*(Note that the commands are compatible with Ubuntu and Ubuntu for
Windows 10. If you are using a different distribution of Linux or a
different OS, please check the corresponding documentation and edit the
commands as necessary.)*

    #Change the directory to the unpacked firmware folder (if not already in the firmware folder)

> \#Antminer S9 cd ./braiins-os\_am1-s9\_ssh\_VERSION
>
> \#Antminer S17 cd ./braiins-os\_am2-s17\_ssh\_VERSION
>
> \#Activate the virtual environment (if it is not already activated)
> source .env/bin/activate
>
> \#Run the script to install Braiins OS+ python3 upgrade2bos.py
> IP\_ADDRESS

**Note:** *for more information about the arguments that can be used,
use the* **\--help** *argument.*

### Uninstall Braiins OS+ using SSH package {#ssh_package_uninstall}

#### Using factory firmware image {#ssh_package_uninstall_image}

First, you need to prepare the Python environment, which is described in
the section `ssh_package_environment`{.interpreted-text role="ref"}.

On an Antminer you can flash a factory firmware image from the
manufacturer's website, with `FACTORY_IMAGE` being file path or URL to
the `tar.gz` (not extracted!) file. Supported images with corresponding
MD5 hashes are listed in the
[platform.py](https://github.com/braiins/braiins/blob/master/braiins-os/upgrade/am1/platform.py)
file.

Run (replace the placeholders `FACTORY_IMAGE` and `IP_ADDRESS`
accordingly):

    #Antminer S9
    cd ~/braiins-os_am1-s9_ssh_2020-09-07-1-463cb8d0-20.09-plus && source .env/bin/activate
    python3 restore2factory.py --factory-image FACTORY_IMAGE IP_ADDRESS

    #Antminer S17
    cd ~/braiins-os_am2-s17_ssh_2020-11-27-0-5eb922d4-20.11-plus && source .env/bin/activate
    python3 restore2factory.py --factory-image FACTORY_IMAGE IP_ADDRESS

**Note:** *for more information about the arguments that can be used,
use the* **\--help** *argument.*

#### Using previously created backup {#ssh_package_uninstall_backup}

First, you need to prepare the Python environment, which is described in
the section `ssh_package_environment`{.interpreted-text role="ref"}.

If you created a backup of the original firmware during the installation
of Braiins OS+, you can restore it by using the following commands
(replace the placeholders `BACKUP_ID_DATE` and `IP_ADDRESS`
accordingly):

    #Antminer S9
    cd ~/braiins-os_am1-s9_ssh_2020-09-07-1-463cb8d0-20.09-plus && source .env/bin/activate
    python3 restore2factory.py backup/BACKUP_ID_DATE/ IP_ADDRESS

    #Antminer S17
    cd ~/braiins-os_am2-s17_ssh_2020-11-27-0-5eb922d4-20.11-plus && source .env/bin/activate
    python3 restore2factory.py backup/BACKUP_ID_DATE/ IP_ADDRESS

**Note: This method is not recommended as the backup creation is very
finicky. The backup can be corrupted and there is no way to check it.
Use at your own risk and make sure, you can access the miner and insert
an SD card to it in case the restoration does not finish successfully!**

OPKG
----

OPKG commands can be used after connecting to the miner via SSH. There
are many OPKG commands, but regarding Braiins OS+, you need to use only
the following:

> -   *opkg update* - updates the package lists. It\'s recommended to
>     use this command before other OPKG commands.
> -   *opkg install PACKAGE\_NAME* install the defined package. It\'s
>     recommended to use *opkg update* to update the package lists
>     before installing packages.
> -   *opkg remove PACKAGE\_NAME*

Since the firmware change results in a reboot, the following output is
expected:

    ...
    Collected errors:
    * opkg_conf_load: Could not lock /var/lock/opkg.lock: Resource temporarily unavailable.
      Saving config files...
      Connection to 10.10.10.1 closed by remote host.
      Connection to 10.10.10.1 closed.

### Features, PROs and CONs of this method:

> -   update Braiins OS+ remotely
> -   switch to Braiins OS+ from other versions remotely
> -   revert to the initial version of Braiins OS remotely
> -   migrates the configuration and continue to mine without a need to
>     configure anything (when updating or switching to Braiins OS+)
> -   no batch-mode (unless you create your own scripts)

### Update Braiins OS+ using OPKG {#opkg_update}

With OPKG you can easily update your current installation of Braiins
OS+, by connecting to the miner via SSH and using the following
commands:

    opkg update
    opkg install firmware

    #you can also connect to the miner and run the commands at the same time
    ssh root@IP_ADDRESS "opkg update && opkg install firmware"

This will migrate the configuration and continue to mine without a need
to configure anything.

### Switch to Braiins OS+ from other versions using OPKG {#opkg_switch_to_braiinsplus}

With OPKG you can easily switch to Braiins OS+, by connecting to the
miner via SSH and using the following commands:

    opkg update
    opkg install bos_plus

    #you can also connect to the miner and run the commands at the same time
    ssh root@IP_ADDRESS "opkg update && opkg install bos_plus"

This will migrate the configuration and continue to mine without a need
to configure anything. Default power limit will be set.

### Braiins OS+ factory reset using OPKG {#opkg_factory_reset}

With OPKG you can easily revert to the initial version of Braiins OS
(the version, which was installed for the first time on that device), by
connecting to the miner via SSH and using the following commands:

    opkg update
    opkg remove firmware

    #you can also connect to the miner and run the commands at the same time
    ssh root@IP_ADDRESS "opkg update && opkg remove firmware"

This will reset the configuration to the state after the first Braiins
OS installation.

Sysupgrade package {#sysupgrade}
------------------

Sysupgrade is used to upgrade the system running on the device. With
this method, you can install various versions of Braiins OS or create a
backup of the system. Installation of a firmware using *Braiins OS web
interface* or using *opkg install firmware* uses this method. It\'s
recommended to use the *Braiins OS web interface* or *opkg install
firmware* instead of this method.

### Usage

In order to use sysupgrade, you need to connect to the miner via SSH.
The syntax is the following:

    sysupgrade [parameters] <image file or URL>

The most important parameters are **\--help** (to display the help) and
**-F** to force the installation. It\'s not recommended to use this
method (besides the way, it is described bellow), unless you really
know, what you are doing.

### Features, PROs and CONs of this method:

> -   installs various version of Braiins OS, while connected to the
>     miner
> -   migrates the configuration
> -   parameters are available to customize the process
> -   no batch-mode (unless you create your own scripts)
> -   cannot switch to an older version of Braiins OS (released
>     before 2020)

### Switch to Braiins OS (without autotuning) from other versions using Sysupgrade {#sysupgrade_switch_braiinsos}

In order to upgrade from older version of Braiins OS or downgrade from
Braiins OS+, use the following command (replace the placeholder
`IP_ADDRESS` accordingly):

    #Antminer S9
    ssh root@IP_ADDRESS 'wget -O /tmp/firmware.tar https://feeds.braiins-os.org/am1-s9/firmware_2020-09-07-0-e50f2a1b-20.09_arm_cortex-a9_neon.tar && sysupgrade /tmp/firmware.tar'

    #Antminer S17
    ssh root@IP_ADDRESS 'wget -O /tmp/firmware.tar https://feeds.braiins-os.org/am2-s17/firmware_2020-09-07-0-e50f2a1b-20.09_arm_cortex-a9_neon.tar && sysupgrade /tmp/firmware.tar'

This command contains the following commands:

> -   **ssh** - to connect to the miner
> -   **wget** - used for downloading files, in this case the firmware
>     package
> -   **sysupgrade** - to actually flash the downloaded firmware package

### Switch to Braiins OS+ from other versions using Sysupgrade {#sysupgrade_switch_braiinsplus}

In order to upgrade from older version of Braiins OS, use the following
command (replace the placeholder `IP_ADDRESS` accordingly):

    #Antminer S9
    ssh root@IP_ADDRESS 'wget -O /tmp/firmware.tar https://feeds.braiins-os.com/am1-s9/firmware_2020-09-07-1-463cb8d0-20.09-plus_arm_cortex-a9_neon.tar && sysupgrade /tmp/firmware.tar'

    #Antminer S17
    ssh root@IP_ADDRESS 'wget -O /tmp/firmware.tar https://feeds.braiins-os.com/am2-s17/firmware_2020-11-27-0-5eb922d4-20.11-plus_arm_cortex-a9_neon.tar && sysupgrade /tmp/firmware.tar'

This command contains the following commands:

> -   **ssh** - to connect to the miner
> -   **wget** - used for downloading files, in this case the firmware
>     package
> -   **sysupgrade** - to actually flash the downloaded firmware package

Note: It\'s recommended to use the *BOS Toolbox*, *Braiins OS web
interface* or *opkg install bos\_plus* instead of this method.

Bos2Bos script {#bos2bos}
--------------

**Bos2Bos script is not recommended to use, unless you experience
problems with the installation using the other methods.** This method
works, only if Braiins OS is already running on the device.

### Features, PROs and CONs of this method:

> -   installs any version of Braiins OS remotely
> -   install a clean version of Braiins OS
> -   parameters are available to customize the process
> -   no batch-mode (unless you create your own scripts)

### Usage

Usage of the Bos2Bos script requires the following setup:

-   *(Only Windows)* Install *Ubuntu for Windows 10* available from the
    Microsoft Store
    [here.](https://www.microsoft.com/en-us/store/p/ubuntu/9nblggh4msv6)
-   Run the following commands in your command line terminal:

*(Note that the commands are compatible with Ubuntu and Ubuntu for
Windows 10. If you are using a different distribution of Linux or a
different OS, please check the corresponding documentation and edit the
commands as necessary.)*

    #Update the repositories and install dependencies
    sudo apt update && sudo apt install python3 python3-virtualenv virtualenv

    # clone repository
    git clone https://github.com/braiins/braiins-os.git

    #change the directory
    cd ./braiins-os/braiins-os/

    #Create a virtual environment and activate it
    virtualenv --python=/usr/bin/python3 .env && source .env/bin/activate

    #Install the required Python packages
    python3 -m pip install -r requirements.txt

After you succesfully finish the setup, you can use the following
commands:

    #activate the virtual environment
    source .env/bin/activate

    #basic usage is the following
    python3 bos2bos.py FIRMWARE_URL IP_ADDRESS

    #the description of all available parameters can be displayed using the following command
    python3 bos2bos.py -h

Miner tool
----------

### SD to NAND install using the Miner tool {#miner_nand_install}

The SD card can be used to replace the firmware running on NAND with
Braiins OS+. This can be done by connecting to the miner via SSH and
usage of the following command:

>     miner nand_install

### Braiins OS+ factory reset using the Miner tool {#miner_factory_reset}

Factory reset can also be done using the *Miner tool*. Use the following
command to do so:

>     miner factory_reset

### Detect device with LEDs using Miner tool {#miner_detect}

You can find a device by turning on LED blinking, using the *Miner
tool*. Use the following command to do so:

>     #turn on LED blinking
>     miner fault_light on
>
>     #turn off LED blinking
>     miner fault_light off

### Turn on/off Nightly feeds using the Miner tool {#miner_nightly}

You can turn on Nightly feeds to get updated to the latest nightly
builds. These builds aim to fix crucial issues as fast as possible and,
because of that, they are not tested as thoroughly as major releases
before being published. Use these builds with caution and only if it
solves your issues. In order to turn on/off the nightly feeds, use the
following command:

>     #turn on nightly feeds
>     miner nightly_feeds on
>
>     #turn off nightly feeds
>     miner nightly_feeds off

### Turn on/off auto-upgrade using the Miner tool {#miner_autoupgrade}

You can turn on the auto-upgrade feature, which will automatically
upgrade the system to the latest version. This feature is **turned on**
by default after transitioning from a **stock** firmware and **turned
off** by default after upgrading from older versions of **Braiins OS**
or **Braiins OS+**. In order to manually turn on/off auto-upgrade, use
the following command:

>     #turn on auto-upgrade
>     miner auto_upgrade on
>
>     #turn off auto-upgrade
>     miner auto_upgrade off
