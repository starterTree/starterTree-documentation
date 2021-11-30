

## :octicons-check-24: Prerequisites

* Linux system

!!! warning

    to enable icons, you must install nerd fonts [nerdFonts](https://www.nerdfonts.com/font-downloads)


## :material-file-download: Installation

Download and install
``` bash title="Linux Terminal"
curl -L https://raw.githubusercontent.com/starterTree/starterTree/master/install.sh | bash

```

??? info "Custom install"
  
    ``` bash title="Linux Terminal"
    cd /opt 
    sudo curl -L "https://github.com/starterTree/starterTree/releases/download/$(basename $(curl -fsSLI -o /dev/null -w %{url_effective} https://github.com/starterTree/starterTree/releases/latest))/starterTree.tar.gz" | sudo tar -xz 
    sudo ln -s /opt/starterTree/starterTree /usr/local/bin/st
    ```

<!--  curl -L ’https://github.com/thomas10-10/az/releases/download/v0.3/az.tar.gz' | tar -xz - -C az --strip-components=1 -->


## :material-update: Update 

since version 0.7 you can update with:
``` bash title="Linux Terminal"
#update to last versiob
st > --update
#update to precise version
st > --update=v0.7
```

or go Installation section

## Usage

create /.config/starterTree/config.yml and see [features]() and example config file

and `>st`

or create a  config file anywere and `st /tmp/config.file`

>and you can use the alias command to encapsulate the config file:
` alias t="st /tmp/myconfig.yml"`
or to manage several different configurations:
` alias toto1="st /other/myconfig.yml"`
` alias toto2="st /other/anOtherconfig.yml"`
or run starterTree via bind:
`bind -x '"\C-p":st'`



