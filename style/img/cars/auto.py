import os


files = [f for f in os.listdir(".") if os.path.isfile(f) and not "py" in f]

for f in files:
    print(
f"""<div class="grid-item">
    <img src="../style/img/cars/{f}" alt="">
    <p>{f.split('.')[0]}</p>  
</div>"""
    )