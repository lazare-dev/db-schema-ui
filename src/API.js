import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com'; // Replace with your API endpoint

const API = {
  getTables: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tables`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tables:', error);
      throw error;
    }
  },

  createTable: async (name) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/tables`, { name });
      return response.data;
    } catch (error) {
      console.error('Error creating table:', error);
      throw error;
    }
  },

  createField: async (name, table_id) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/fields`, { name, table_id });
      return response.data;
    } catch (error) {
      console.error('Error creating field:', error);
      throw error;
    }
  },

  // Add more API functions for updating and deleting tables and fields
};

export default API;
