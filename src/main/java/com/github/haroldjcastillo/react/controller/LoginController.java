package com.github.haroldjcastillo.react.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping(value = {"/", "/login"})
    public String login(Model model) {
        model.addAttribute("bar", "bar");
        return "index";
    }
}
