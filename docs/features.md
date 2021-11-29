## :octicons-server-24: add ssh machines
```
machine1: 
  ssh: root@X.X.X.X
  tags: 
    - foo
    - foo1
otherMachine1: {ssh: "root@X.X.X.X", tags:["foo1"]}
myGroup:
    otherotherMachine1: {ssh: "root@X.X.X.X", tags:["foo1"]}
    
```
## :material-file-cog-outline: add other starterTree config files
### :material-harddisk: Local Files
    
=== "Relative File"

    ezgezgezgzeg
    ``` 
    gegzeg
    ```
=== "Aboslute File"

    ezgezgezgzeg
    ``` 
    gegzeg
    ```
        
### :material-web: External Files

=== ":link: url file"

    ezgezgezgzeg
    ``` 
    gegzeg
    ```
=== ":fontawesome-brands-github-alt: GitHub private File"

    ezgezgezgzeg
    ``` 
    gegzeg
    ```        
=== ":material-gitlab: Gitlab private File"

    ezgezgezgzeg
    ``` 
    gegzeg
    ```        

TODO github private file 
    or get token file
TODO gitlab private file
??? Encrypted config files
    fezfzeezgezgegezggezg
## :material-kubernetes: add kubernetes config
??? Encrypted config kubernetes files
    fezfzeezgezgegezggezg
## :material-link-variant-plus: add web links
```
web_site:
    www: "www.google.fr"
```
## :material-bash: add command
```
shutdown_pc:
    cmd: "shutdown"
```
with a prompt for dangerous command
```
shutdown_pc:
    cmdP: "shutdown"
```
## :octicons-search-24: search mod

