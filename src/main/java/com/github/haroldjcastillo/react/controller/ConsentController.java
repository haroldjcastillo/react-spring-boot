package com.github.haroldjcastillo.react.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ConsentController {

    @GetMapping(value = "/consent")
    public String login(Model model) {
        model.addAttribute("foo", "foo");
        return "index";
    }
}
