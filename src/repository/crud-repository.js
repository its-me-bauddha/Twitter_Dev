class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      console.log(data);
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong while create");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log("Something went wrong while destroy the object");
      throw error;
    }
  }
  async get(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      console.log("Something went wrong while fetching the object");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.find({});
      return response;
    } catch (error) {
      console.log("Something went wrong while fetching the all objects");
      throw error;
    }
  }

  async update(id, data) {
    try {
      console.log(data);
      const response = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log("Something went wrong while updating the object");
      throw error;
    }
  }
}

module.exports = CrudRepository;
