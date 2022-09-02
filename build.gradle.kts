plugins {
    id("java")
    id("com.github.johnrengelman.shadow") version "7.1.2"
}

val numberVersion = "5.0.0"

group = "net.ellibot.ellie"
version = "5.0.0-SNAPSHOT"

repositories {
    mavenCentral()

    maven("https://m2.dv8tion.net/releases")
    maven("https://jitpack.io")
}

dependencies {
    implementation(group = "net.dv8tion", name = "JDA", version = "5.0.0-alpha.17") {
        exclude(module = "opus-java")
    }
    implementation(group = "ch.qos.logback", name = "logback-classic", version = "1.2.10")
    implementation(group = "com.github.JDA-Applications", name = "JDA-Utilities", version = "804d58a") {
        // This is fine
        exclude(module = "jda-utilities-examples")
        exclude(module = "jda-utilities-doc")
        exclude(module = "jda-utilities-command")
        exclude(module = "jda-utilities-menu")
        exclude(module = "jda-utilities-oauth2")
    }
}