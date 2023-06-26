# 21.2.5. Data Store:

In the **previous lesson**, you **created a server**. In this video, you'll learn **how to create** a **database** using the **package** from the **npm registry** called `LowDB`.

![Data_Store_01.jpg](Screen_Shots%2FData_Store_01.jpg)

In our **previous lesson**, we **created** a `littleserver`. In this case, we're going to create a `little database`. Just as before, we're **going to use** a **package** from the **npm registry**. The **package** that we're going to use is called `LowDB`. Now, this is a **very minimal database**. However, it **illustrates the importance** of being able to **persist information**, and with the goal of our lesson of **not being overwhelmed**, we're going to bring in the **small package** that **simply creates** a **JSON file** that we can use to **persist our data**.

![Data_Store_02.jpg](Screen_Shots%2FData_Store_02.jpg)

So, let's go ahead and **navigate** to the **npm registry**. And as you can see here, we **get some information** about this package called `LowDB`. You can see there the **weekly downloads**. You can see how we can do a `post` that is **right to this file** that we're **going to be using**.

![Data_Store_03.jpg](Screen_Shots%2FData_Store_03.jpg)

You can see further down here **how do we get started**. We **require the package**. We require the `FileSync`. We **give a name** to **the file** that's going to be **persisted** into our **file system**, that is going to **hold the JSON data** that we're **going to be writing**. And you can see there **how we use this file**, and how we can **write to the file**. And later on in the documentation, you can see **how to lead**, **how to filter**, and some of the **other features** that you will **want to do** when you're **working with data**. Ultimately, the `crud`, as it's often called, the `create`, `read`, `update`, and `delete` that **all data** applications** tend to have.

![Data_Store_04.jpg](Screen_Shots%2FData_Store_04.jpg)

```shell
cd "D:\My Documents\MIT Full Stack Development\Module 21 - Introduction to Tiered Applications\Module 21.0 - Introduction to Tiered Applications\Self-Study_Activities\21.2.5. Data Store"

git clone https://github.com/kogsio/littletiers.git
```