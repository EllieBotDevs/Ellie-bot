package net.elliebot.ellie;

import net.elliebot.ellie.events.HelloEvent;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.utils.Compression;
import net.dv8tion.jda.api.utils.cache.CacheFlag;

/**
 *
 * @author EllieBotDevs (devs@elliebot.net)
 */
public class main {

    public static void main(String args[]) throws Exception{

        JDA jda = JDABuilder.createDefault("Bot-Token").build();

        jda.addEventListener(new HelloEvent());
    }


}
