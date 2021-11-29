## :octicons-server-24: add ssh machines

``` yaml
machine1: # (1)
  ssh: root@X.X.X.X # (2)
  tags: # (3)
    - foo
    - foo1
otherMachine1: {ssh: "root@X.X.X.X", tags:["foo1"]}
myGroup: # (4)
    otherotherMachine1: {ssh: "root@X.X.X.X", tags:["foo1"]}
    
```
1.    `name_of_server` type: key  :fontawesome-solid-exclamation:obligatory     
2.    `user@host` type: string , you can add same extra argument of open ssh command like `root@x.X.X.X -t sudo ssh user@X.X.X.X -t` :fontawesome-solid-exclamation:obligatory
3.     list of tags type: array  :octicons-info-24:facultatif
     

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

### with a prompt for dangerous command

```
shutdown_pc:
    cmdP: "shutdown"
```
## :octicons-search-24: search mod

