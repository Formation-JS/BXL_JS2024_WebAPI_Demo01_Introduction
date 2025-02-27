import express from 'express';

const flowerController = {

    /**
     * Obtenir la liste des fleurs
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    getAll: async (req, res) => {
        res.sendStatus(501);
    },

    /**
     * Obtenir le detail d'une fleur
     * @param {express.Request} req La requête
     * @param {express.Response} res La réponse
     */
    getById: async (req, res) => {
        res.sendStatus(501);
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