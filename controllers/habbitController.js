import mongoose from "mongoose";
import Habbits from "../models/habbitModel.js";

// Get All Habbits
export const getAllHabbits = async (req, res) => {
    try {
        const gethabbits = await Habbits.find()
        res.status(200).json(gethabbits);

    } catch (e) {
        res.status(500).json({ error: e.message })
    }

}

// Creating Habbits 
export const createHabbits = async (req, res) => {
    try {
        const { title, description, date, isActive } = req.body()

        const newHabbit = new Habbits({
            title,
            description,
            date: new Date(date),
            isActive: Boolean(isActive)
        })

        const habbit = await newHabbit.save()
        res.status(201).json(habbit);
    } catch (e) {
        res.status(500).json({ error: e.message })
    }

}

// Update Habbits
export const updateHabbits = async (req, res) => {
    try {
        const { title, description, date, isActive } = req.body()
        const updateHabbit = await Habbits.findById(req.params.id)

        if (updateHabbit) {
            updateHabbit.tile = title
            updateHabbit.description = description

            const updateNewHabbit = await newHabbit.save()
            res.status(200).json(updateNewHabbit);
        }

    } catch (e) {
        res.status(500).json({ error: e.message })
    }

}

// Delete Habbits
export const deleteHabbits = async (req, res) => {
    try {
        const deleteHabbit = await Habbits.findByIdAndDelete(req.params.id)
        if (deleteHabbit) {
            res.status(200).json({ message: 'Dleted succsessfully' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }

}
