

## :octicons-check-24: Prerequisites

* Linux system

!!! warning

    to enable icons, you must install nerd fonts [nerdFonts](https://www.nerdfonts.com/font-downloads)


## :material-file-download: Installation

Download and install

``` bash title=":octicons-terminal-24: Terminal"
curl -L https://raw.githubusercontent.com/starterTree/starterTree/master/install.sh | bash
```

??? info "Custom install"
  
    ``` bash title=":octicons-terminal-24: Terminal"  
    cd /opt 
    sudo curl -L "https://github.com/starterTree/starterTree/releases/download/$(basename $(curl -fsSLI -o /dev/null -w %{url_effective} https://github.com/starterTree/starterTree/releases/latest))/starterTree.tar.gz" | sudo tar -xz 
    sudo ln -s /opt/starterTree/starterTree /usr/local/bin/st
    ```

<!--  curl -L ’https://github.com/thomas10-10/az/releases/download/v0.3/az.tar.gz' | tar -xz - -C az --strip-components=1 -->


## :material-update: Update 

since version 0.7 you can update with:
``` bash title=":octicons-terminal-24: Terminal"
#update to last versiob
t > --update
#update to precise version
t > --update=v0.7
```

or go Installation section


