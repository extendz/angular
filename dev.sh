#!/bin/sh
gnome-terminal  --tab -- /bin/bash -c "nx serve"
gnome-terminal  --tab -- /bin/bash -c "nx serve api"
gnome-terminal  --tab -- /bin/bash -c "code ."
gnome-terminal  --tab -- /bin/bash -c "cd /home/randika/Documents/projects/kotlin/gadgetshop;docker-compose up;exec /bin/bash"
