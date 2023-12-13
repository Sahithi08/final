process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js'); // Import your Express app
const User = require("../models/user");

chai.use(chaiHttp);
const expect = chai.expect;

describe('User API Tests', () => {
    it('Register user - Success', async () => {
        const newUser = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123',
        };

        try {
            const res = await chai.request(app)
                .post('/register')
                .send(newUser);

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.text).to.equal('User Registered successfully');

            // Add more assertions or actions based on your test scenario

        } catch (error) {
            console.error('Error during test:', error);
            throw error;
        }
    });

    it('Login user - Success', async () => {
        // Assuming you have a user registered for testing
        const existingUser = new User({
            name: 'Test User',
            email: 'test.user@example.com',
            password: 'testpassword',
        });
        await existingUser.save();

        const loginData = {
            email: 'test.user@example.com',
            password: 'testpassword',
        };

        try {
            const res = await chai.request(app)
                .post('/login')
                .send(loginData);

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');

            // Add more assertions or actions based on your test scenario

        } catch (error) {
            console.error('Error during test:', error);
            throw error;
        }
    });

    // Add more test cases as needed for your application

});