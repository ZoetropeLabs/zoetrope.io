---
title: Integration Testing with Protractor, WebdriverJS and Sauce Labs
date: 2016-03-23 21:39:00 Z
featured: 'true'
header_background: '/assets/img/tech-blog/protractors.jpg'
author: richwebb
tags:
- saucelabs
- Testing
- Selenium
---

**Edit:** See our [follow up post](https://zoetrope.io/tech-blog/refining-our-ui-regression-tests) to this which explains how we've refined our process. We’ve recently begun automating integration tests of the Zoetrope widget. When releasing any new code which could affect clients in production we have to be very careful, mainly ensuring that cross-browser compatibility is retained.

### WebdriverJS, Selenium and Sauce Labs

The guys at [Sauce Labs](https://saucelabs.com/) have created a really cool cloud based testing service which is based around the [Selenium project](http://docs.seleniumhq.org/). Selenium allows you to control a number of different browsers by sending Selenium commands over the [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol). Sauce Labs provide a Selenium server so all that’s needed is a test framework and a JSON Wire interface. There are quite a few options when choosing a testing platform. I’ll start by going through a few different options for each part of the stack and our reasons for using it. We decided early on to use Node.js for testing and I’ll focus on that for the rest of this post.

### Test-Runners

I would suggest deciding on a test-runner before doing anything else, your choice here will make a big difference to the rest of your stack and help to avoid rewriting code later. A test runner can be as simple as a shell script running your test framework on each of your specifications but you’ll find that once you start integrating with Sauce Labs and CI systems, your shell script will start to get rather complex. There are luckily a few ready made solutions. If you’re running end to end tests (e2e) I would highly recommend [Protractor](https://github.com/angular/protractor). Although the documentation can be a little sparse at times, their [issues page](https://github.com/angular/protractor/issues) had solutions to most of the problems I encountered when setting it up and it’s also one of the best places to find information on WebdriverJS. Protractor is fairly simple to set up, you can follow [this guide](https://github.com/angular/protractor/blob/master/docs/getting-started.md) to get something running quickly. Starting with the configuration file, it’s probably easiest to set the chromeOnly flag to true, and set up the path for [chromedriver](https://code.google.com/p/selenium/wiki/ChromeDriver). This will allow you to start writing tests without worrying about connecting to Sauce Labs. If you’re not using Angular you will get some errors to begin with, these can be solved by adding the following code to your protractor configuration file:

### Test Frameworks

Once you have protractor set up you can start writing some tests. Protractor was originally written with [Jasmine](http://jasmine.github.io/) in mind and that’s what we’re using here at Zoetrope. There is also the option to use [Mocha](https://github.com/mochajs/mocha) if you prefer. Mocha is much more flexible than Jasmine and allows you to choose between TDD (ala qunit) and BDD (ala Jasmine) so you can write tests in whatever form you prefer. Really there’s very little difference between the two styles and it comes down to personal preference. Do bear in mind that with Mocha you will have to add an assertion library. Chai seems to be the most popular choice.

### JSON Wire Interface

If you want to run your tests against a webpage, you’ll need a library to interface with selenium. For javascript there are a few possibilities: [WebdriverJS](http://code.google.com/p/selenium/wiki/WebDriverJs) is the standard library and can be used in node with the selenium-webdriverjs package. This library is heavily reliant on promises and is unfortunately integrated quite deeply into protractor so if you’re using protractor then you’ll need to use this package. Documentation is definitely lacking for webdriverjs and you’ll need to get familiar with the source if you’re doing anything complex. I actually started out using this [webdriverJS](http://webdriver.io/) implementation which unfortunately has the same name as the selenium version. I found that documentation was much better here and it was simpler to get started with. If you’re not relying on Protractor I might recommend it, it’s simpler to work with if your tests are heavily synchronous and the code is very readable.

### Writing Tests

Page Objects are a fairly useful concept if you’re testing anything complex. You can separate your tests from the page specific code like finding a particular button or form object. Here’s a simplified version of one of our tests: And the page object used: Using a page object ensures that it’s as simple as possible to modify the test for new functionality and/or updates to CSS elements etc. If you’re testing multiple pages the advantages are obvious.

### Using Sauce Labs

Running tests on Sauce Labs is simple with protractor. Just add sauceUser and sauceKey to your protractor configuration and use the capabilities to configure a particular test browser. If you’d like to run tests on multiple browser, you can add any number of them to multiCapabilities and protractor will start running everything in parallel.

### Some Tips And Tricks

#### Sauce Connect

If you are testing a local version of your site, you have two options, the easiest is to use Sauce Connect which is a tunneling program provided by Sauce Labs, so you can point your sauce labs tests at localhost (or anywhere on the local network) and everything will run over the tunnel. Unfortunately, we found sauce connect to be fairly slow, especially on data intensive tests where screenshots were being taken. The other option, which is of course much faster, is to open a port on your firewall and set up a temporary subdomain to test with. If possible, use the second option unless your work is confidential or a security risk.

#### Action Sequences

Keeping things compatible with all browser drivers and both appium and Selenium can sometimes become difficult, one example in our case was clicking and dragging. The recommended method is as follows: Unfortunately, action sequences are currently unsupported by appium, which is used to run most of the mobile tests on Sauce Labs. There’s no pretty way around this so we ended up injecting a script into the browser that generates the requisite events:

#### Screenshots

Due to the nature of our widget, the only way to fully test some parts is to visually compare screenshots to generated images. This turned out to be one of the most time consuming parts of the process and revealed quite a few bugs in selenium which we’ll be reporting ASAP. IE 7/8 were particularly affected by this, the screenshot is inconsistently a few pixels offset. If you start taking advantage of some of the lesser used areas of Selenium, you’ll find there are still quite a few bugs to contend with.

#### Control Flow

WebdriverJS makes use of promises to help keep us out of callback hell, but there’s also some more interesting functionality hidden underneath this: control flows. The controlFlow class keeps a queue of tasks and runs those tasks synchronously. This makes running complex, synchronous code much simpler. Protractor also comes with a patched version of Jasmine allowing you to make an assertion on a promise. Below are a few snippets showing some of the functionality available using controlFlow and promises:

### Conclusion

Once they’re set up and working, automated integration tests on Sauce Labs are incredibly useful. We can now push a new branch to github, Jenkins will then build, serve and test that branch, giving us the result of a few hundred integration tests.
