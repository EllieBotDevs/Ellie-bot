package com.aidanthebandit.banditbot2;

import com.aidanthebandit.banditbot2.events.HelloEvent;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.utils.Compression;
import net.dv8tion.jda.api.utils.cache.CacheFlag;

public class main {

    public static void main(String args[]) throws Exception{

        JDA jda = JDABuilder.createDefault("Bot-Token").build();

        jda.addEventListener(new HelloEvent());
    }


}
