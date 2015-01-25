## http://meiroo.github.io/#explorer

###Photosynth ：微软基于照片序列的3D重建服务展示网络

对需要重建物体拍照。然后使用Photosynth preview服务展示重建效果。
目前调查：使用SynthExport开源工程下载点云数据。通过官网新增的导出接口下载Camera数据。目前使用这两个数据合并展示了点云的3D模型和Camera视角序列。
下一步寻找合适办法。将点云组成模型并且和照片结合。

demo展示 ： http://meiroo.github.io/show/photosynth/

提示：按空格键可以切换两种视角。


###目前格式理解

camera 位置数据存在于 0.json，此文件可以通过官网preview部分的export接口导出

如下：

```
"cameras" : [
	{
		"index" : 0,
		"path_index" : 0,
		"intrinsics" : [62.6498, 0.561728,-0.000911,0.000911],
		"position" : [-3.25044, 1.50977, -0.0802371],
		"orientation" : [0.0539125, -0.449611, -0.883975, 0.116327],
		"dominant_plane" : [-0.199918, 0.782347, 0.589886, 8.26924],
		"timestamp" : 1403733350,
		"image_size" : [918,1634],
		"original_size" : [1456,2592],
		"balance_to_next" : [0.997797,1.00497,1.0005],
		"depth_range" : [3.26474, 15.2239]
	},
```

点云数据，目前使用SynthExport导出ply ASCII 格式。使用THREE.PointCloud展示。
