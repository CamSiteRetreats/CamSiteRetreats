Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("e:\UIUX\ui-ux-pro-max-skill-main\CAM SITE RETREATS\tour\liengai\9.png")
$bmp = New-Object System.Drawing.Bitmap 1200, 630
$graph = [System.Drawing.Graphics]::FromImage($bmp)
$graph.DrawImage($img, 0, 0, 1200, 630)
$bmp.Save("e:\UIUX\ui-ux-pro-max-skill-main\CAM SITE RETREATS\tour\liengai\9_og.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$graph.Dispose()
$bmp.Dispose()
$img.Dispose()
