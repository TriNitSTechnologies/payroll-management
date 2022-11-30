package com.trinitstechnologies.payroll.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Set;

import static com.google.common.collect.Lists.newArrayList;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    String HOST = "trinitstechnologies.com";
//    String HOST = "localhost:8080";

    @Bean
    public Docket api() {
        Set<String> protocols = new LinkedHashSet<>();
        protocols.add("https");
//        protocols.add("http");

        return new Docket(DocumentationType.SWAGGER_2).select()
                .apis(RequestHandlerSelectors.basePackage("com.trinitstechnologies.payroll"))
                .build()
                .apiInfo(apiInfo())
                .useDefaultResponseMessages(false).protocols(protocols).host(HOST)
                .globalResponses(HttpMethod.GET, newArrayList(
                        new ResponseBuilder().code("500")
                                .description("Internal server error").build(),
                        new ResponseBuilder().code("403")
                                .description("Forbidden!!!!!").build()
                ));
    }

    private ApiInfo apiInfo() {
        ApiInfo apiInfo = new ApiInfo("Trinits Technologies REST API", "Demo APIs for Trinits Technologies",
                "API 1", "Terms of service", new Contact("Trinits Technologies",
                "https://trinitstechnologies.com", "support@trinitstechnologies.com"),
                "License of API", "API license URL", Collections.emptyList());
        return apiInfo;
    }
}