package com.aidanthebandit.banditbot2.events;

import net.dv8tion.jda.api.entities.Guild;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class HelloEvent extends ListenerAdapter {

    public void onGuildMessageReceived(GuildMessageReceivedEvent event){
       String messageSent = event.getMessage().getContentRaw();
       if(messageSent.equalsIgnoreCase("Hi")){
           event.getChannel().sendMessage("hello").queue();
       }
    }


}
