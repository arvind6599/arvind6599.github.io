---
title: "Predator-Prey Visual Intelligence"
date: 2024-05-10
draft: false
tags: ["Computer Vision", "Machine Learning", "PyTorch", "YOLOv7"]
description: "Real-time predator-prey detection and tracking using fine-tuned object detection models deployed as a web application."
---

A computer vision system for detecting and tracking predator-prey dynamics in video. Built on top of YOLOv7 with custom fine-tuning for wildlife scenarios.

**Live demo:** [arvind6599.github.io/PredatorPreyWebsite](https://arvind6599.github.io/PredatorPreyWebsite/)

## What it does

- Detects and classifies animals in video frames in real time
- Tracks movement and infers predator-prey relationships across frames
- Deployed as a web app with a clean interface for uploading and analyzing footage

## Stack

- **Model:** YOLOv7 (fine-tuned on custom dataset)
- **Training:** PyTorch
- **Deployment:** GitHub Pages + Python backend
