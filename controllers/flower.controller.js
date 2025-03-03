import express from 'express';
import flowerModel from '../models/flower.model.js';

const flowerController = {

    /**
     * Obtenir la liste des fleurs
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    getAll: async (req, res) => {

        // Récup des données
        const flowers = flowerModel.find();

        // Mapping => Data Transfert Object
        const flowersDTO = flowers.map((flower) => ({
            id: flower.id,
            name: flower.commonName ?? flower.name,
            url: `/api/flower/${flower.id}`
        }));

        // Reponse au format JSON
        res.status(200).json(flowersDTO);
    },

    /**
     * Obtenir le detail d'une fleur
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    getById: async (req, res) => {
        // Extraction du parametre « id »
        const id = parseInt(req.params.id);

        // Récup des données
        const flower = flowerModel.findById(id);

        // Reponse 404 si aucune donnée trouvé
        if (!flower) {
            res.sendStatus(404);
            return;
        }

        // Reponse au format JSON
        res.status(200).json(flower);
    },

    /**
     * Verifier l'existance d'une fleur
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    checkExists: async (req, res) => {
        const flower = parseInt(req.params.id);

        if (!flowerModel.findById(flower)) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    },

    /**
     * Ajouter une fleur
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    add: async (req, res) => {
        const flower = req.body;
        if (!flower || !flower.name || !flower.origins || !flower.family || flower.toxicity === undefined) {
            res.status(400).json({ error: 'Les données sont invalides' });
            return
        }

        const newFlower = flowerModel.insert(flower);

        res.location(`/api/flower/${newFlower.id}`);
        res.status(201).json(newFlower);
    },

    /**
     * Modifier une fleur
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    update: async (req, res) => {
        const flowerId = parseInt(req.params.id);
        const flower = req.body;

        if (!flowerModel.findById(flower)) {
            res.sendStatus(404);
            return;
        }

        if (!flower || !flower.name || !flower.origins || !flower.family || flower.toxicity === undefined) {
            res.status(400).json({ error: 'Les données sont invalides' });
            return
        }

        flowerModel.modify(flowerId, flower);

        res.sendStatus(204);
    },

    /**
     * Supprimer une fleur
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    delete: async (req, res) => {
        const id = parseInt(req.params.id);
        flowerModel.remove(id);

        res.sendStatus(204);
    }

};

export default flowerController;