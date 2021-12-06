# ReactJS - Spring Boot

## How do you share _spring_ `model` with the _React_ app ?

Create a script that received the variable using the template engine _thymeleaf_

````html
<script th:inline="javascript">
  /*<![CDATA[*/
  foo = [[${foo}]];
  bar = [[${bar}]];
  /*]]>*/
</script>
````

## How do you manage the routes ?

Configure the static path

`````properties
spring.thymeleaf.prefix=classpath:/static/
`````

Build the `create-react-app` using the maven plugin `frontend-maven-plugin`

```xml
<plugin>
    <groupId>com.github.eirslett</groupId>
    <artifactId>frontend-maven-plugin</artifactId>
    <version>${frontend-maven-plugin.version}</version>
    <configuration>
        <workingDirectory>src/main/webapp</workingDirectory>
    </configuration>
    <executions>
        <execution>
            <id>install node</id>
            <goals>
                <goal>install-node-and-yarn</goal>
            </goals>
            <configuration>
                <nodeVersion>${node.version}</nodeVersion>
                <yarnVersion>${yarn.version}</yarnVersion>
            </configuration>
        </execution>
        <execution>
            <id>yarn install</id>
            <goals>
                <goal>yarn</goal>
            </goals>
            <phase>generate-resources</phase>
        </execution>
        <execution>
            <id>yarn test</id>
            <goals>
                <goal>yarn</goal>
            </goals>
            <phase>test</phase>
            <configuration>
                <arguments>test</arguments>
                <environmentVariables>
                    <CI>true</CI>
                </environmentVariables>
            </configuration>
        </execution>
        <execution>
            <id>yarn build</id>
            <goals>
                <goal>yarn</goal>
            </goals>
            <phase>compile</phase>
            <configuration>
                <arguments>build</arguments>
            </configuration>
        </execution>
    </executions>
</plugin>
```

Move the build folder content to the target classes

````xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-resources-plugin</artifactId>
    <version>3.1.0</version>
    <executions>
        <execution>
            <id>copy-resources</id>
            <phase>process-classes</phase>
            <goals>
                <goal>copy-resources</goal>
            </goals>
            <configuration>
                <outputDirectory>${basedir}/target/classes/static</outputDirectory>
                <resources>
                    <resource>
                        <directory>src/main/webapp/build</directory>
                    </resource>
                </resources>
            </configuration>
        </execution>
    </executions>
</plugin>
````

## How do you pass model attributes from a controller to React JS app?

Is always important to return  `index` as root template. 

````java
@GetMapping(value = {"/", "/login"})
public String login(Model model) {
    model.addAttribute("bar", "bar");
    return "index";
}
````