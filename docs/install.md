### Prerequisites

* Linux system

### Installation

Download and install

```
curl -L https://raw.githubusercontent.com/starterTree/starterTree/master/install.sh | bash
```

or

```bash  
cd /opt 
sudo curl -L "https://github.com/starterTree/starterTree/releases/download/$(basename $(curl -fsSLI -o /dev/null -w %{url_effective} https://github.com/starterTree/starterTree/releases/latest))/starterTree.tar.gz" | sudo tar -xz 
sudo ln -s /opt/starterTree/starterTree /usr/local/bin/st
```

<!--  curl -L ’https://github.com/thomas10-10/az/releases/download/v0.3/az.tar.gz' | tar -xz - -C az --strip-components=1 -->

to enable icons, you must install nerd fonts [nerdFonts](https://www.nerdfonts.com/font-downloads)

#### UPDATE 

since version 0.7 you can update with:
```
#update to last versiob
t > --update
#update to precise version
t > --update=v0.7
```
