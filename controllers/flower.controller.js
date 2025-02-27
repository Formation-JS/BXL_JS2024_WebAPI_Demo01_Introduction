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
        res.sendStatus(501);
    },

    /**
     * Ajouter une fleur
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    add: async (req, res) => {
        res.sendStatus(501);
    },
    
    /**
     * Modifier une fleur
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    update: async (req, res) => {
        res.sendStatus(501);
    },

    /**
     * Supprimer une fleur
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    delete: async (req, res) => {
        res.sendStatus(501);
    }

};

export default flowerController;