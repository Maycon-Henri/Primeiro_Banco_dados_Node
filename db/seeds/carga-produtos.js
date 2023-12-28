/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {id: 1, descricao: 'Linguiça calabresa',marca: 'Aurora', valor: 200.00},
    {id: 2, descricao: 'Arroz parboilizado',marca: 'Tio João', valor: 100.00},
    {id: 3, descricao: 'Cerveja 255ml',marca: 'Heineken', valor: 251.00}
  ]);
};
