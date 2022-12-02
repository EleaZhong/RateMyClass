package com.google.firebase.firebaseadmin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

// public class IndexController {
//     @GetMapping("")
//     public ModelAndView home() {
//         ModelAndView mav=new ModelAndView("index");
//         return mav;
//     }
// }

@Controller
public class IndexController {
    @RequestMapping(value = { "/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/*/{y:[\\w\\-]+}","/error" })
    public String react() {
        return "index";
    }
}