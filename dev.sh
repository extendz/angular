#!/bin/sh
gnome-terminal  --tab -- /bin/bash -c "nx serve"
gnome-terminal  --tab -- /bin/bash -c "nx serve api"
gnome-terminal  --tab -- /bin/bash -c "code ."
