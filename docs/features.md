## :octicons-server-24: ssh machines

``` yaml
machine1: #(1)
  ssh: root@X.X.X.X #(2)
  tags: #(3)
    - foo
    - foo1
  message_rich: hello #(5)
otherMachine1: {ssh: "root@X.X.X.X", tags:["foo1"]}
myGroup: # (4)
    otherotherMachine1: {ssh: "root@X.X.X.X", tags:["foo1"]}
    
```

1.    `name_of_element`  
      type: **key**   
      
      :fontawesome-solid-exclamation: obligatory
      
2.    `user@host`   
      type: **string**   
      you can add same extra argument of open ssh command like `root@x.X.X.X -t sudo ssh user@X.X.X.X -t`  
      
      :fontawesome-solid-exclamation: obligatory
      
3.    list of tags  
      type: **array**  
      
      :octicons-info-24: facultatif

4.    `name_of_group`   
      type: **dict**
      
      must contain sub group or any elements
      
      :octicons-info-24: facultatif
      
5.    `message`  
      type: **string**
        
      message before ssh session, support riche syntax like `":warning:[bold red] hello"`

## :material-file-cog-outline: include other starterTree config files
### :material-harddisk: Local Files
    
=== "Relative File"
    
    ``` yaml
    example:
      file_content_relative: subDir/anotherConf.yml # read an other config file on relative path
    ```
=== "Aboslute File"

    TO DO
    ``` 
    TO DO
    ```
    
### :material-web: External Files

=== ":link: url file"
      
    ``` yaml
    example:
      web_content: "https://raw.githubusercontent.com/thomas10-10/starterTree/master/configExample/config.yml"
    ```
=== ":fontawesome-brands-github-alt: GitHub private File"
       
    ``` yaml
    example:
      github_api_content_prompt_token: https://api.github.com/repos/username/example/contents/perso.yml
        
    ```        
=== ":material-gitlab: Gitlab private File"
    
    ``` yaml
    example:
      gitlab_api_content_prompt_token: "https://myGitlab/api/v4/projects/35/wikis/example_config.yml"
    ```        
!!! info "Encrypted files"
    
    it's support encrypted files with gnu,
    if extension file is .asc, it will prompt your password to decrypt file

!!! info "pull mofifs"

    if external files is modified, use `st> example --pull` to pull modifs (it will erase your local config file example.yml in ~/.starterTree )

## :material-kubernetes: add kubernetes config

## :material-link-variant-plus: add web links
```
web_site:
    www: "www.google.fr"
```
## :material-bash: command
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

