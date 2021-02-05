let h = true;
Events.on(ClientLoadEvent, () => {
    Events.on(WorldLoadEvent, () => {
        if(h){
            Vars.ui.hudGroup.children.get(5).children.get(0).children.get(0).children.get(0).children.get(0).row();
            Vars.ui.hudGroup.children.get(5).children.get(0).children.get(0).children.get(0).children.get(0).button(
                "what the fuck",
                () => {
                    Time.setDeltaProvider(
                        () => {
                            return -1;
                        }
                    );
                }
            ).size(150, 45);
            h = false;
        }
    });
});
