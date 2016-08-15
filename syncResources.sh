#!/bin/bash
# 反向更新图片
scp -r -P 2201 ubuntu@207.226.142.46:/opt/apps/site-apps/presentations/flowtime-demo1/images /Users/papa/vcs/site-apps/presentations/flowtime-demo1/.

# 正向
scp -r -P 2201 /Users/papa/vcs/site-apps/presentations/flowtime-demo1/images ubuntu@207.226.142.46:/opt/apps/site-apps/presentations/flowtime-demo1/.
scp -r -P 2201 /Users/papa/vcs/site-apps/presentations/flowtime-demo1/media ubuntu@207.226.142.46:/opt/apps/site-apps/presentations/flowtime-demo1/. 
