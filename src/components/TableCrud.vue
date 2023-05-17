<template>
  <div class="text-right">
    <v-btn icon="mdi-plus" size="small" @click="dialog = true"></v-btn>
  </div>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Primer nombre</th>
        <th class="text-left">Vehiculo</th>
        <th class="text-left">Apellido</th>
        <th class="text-left">Email</th>
        <th class="text-left">Edad</th>
        <th class="text-left">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in personas" :key="item.id">
        <td>{{ item.legalFirstName }}</td>
        <td>{{ item.vehiculo }}</td>
        <td>{{ item.legalLastName }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.age }}</td>
        <td>
          <v-btn
            density="compact"
            icon="mdi-delete"
            @click="(selectedItem = item), deleteItem(item)"
          ></v-btn>
          <v-btn
            density="compact"
            icon="mdi-pencil"
            @click="(selectedItem = item), (dialogUpdate = true)"
          ></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <!--Dialogo create-->
  <v-dialog v-model="dialog" width="1024">
    <template v-slot:item.actions="{ item }"> </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="legalFirstName"
                label="Legal first name*"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="name"
                label="Legal middle name"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="legalLastName"
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                label="Email*"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                label="Password*"
                type="password"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="age"
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                v-model="intereses"
                :items="[
                  'Skiing',
                  'Ice hockey',
                  'Soccer',
                  'Basketball',
                  'Hockey',
                  'Reading',
                  'Writing',
                  'Coding',
                  'Basejump',
                ]"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6">
              <!--Radio Buttons-->
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="(option, index) in options"
                  :key="index"
                  :label="option.label"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>
              <v-row>
                <!--checbox-->
                <v-col cols="12" sm="4" md="4">
                  <v-checkbox
                    v-model="ex4"
                    label="red"
                    color="red"
                    value="red"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                  <v-checkbox
                    v-model="ex4"
                    label="indigo"
                    color="indigo"
                    value="indigo"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                  <!--Aqui lo inicializo sin marcar-->
                  <v-checkbox
                    v-model="ex4"
                    label="orange"
                    color="orange"
                    value=""
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="(dialog = false), save()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!--Dialogo Update-->
  <v-dialog v-model="dialogUpdate" width="1024">
    <template v-slot:item.actions="{ item }"> </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="selectedItem.legalFirstName"
                label="Legal first name*"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="selectedItem.name"
                label="Legal middle name"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="selectedItem.legalLastName"
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="selectedItem.email"
                label="Email*"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="selectedItem.password"
                label="Password*"
                type="password"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="selectedItem.age"
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                v-model="selectedItem.intereses"
                :items="[
                  'Skiing',
                  'Ice hockey',
                  'Soccer',
                  'Basketball',
                  'Hockey',
                  'Reading',
                  'Writing',
                  'Coding',
                  'Basejump',
                ]"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6">
              <!--Radio Buttons-->
              <v-radio-group v-model="selectedItem.radioGroup">
                <v-radio
                  v-for="(option, index) in options"
                  :key="index"
                  :label="option.label"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>
              <v-row>
                <!--checbox-->
                <v-col cols="12" sm="4" md="4">
                  <v-checkbox
                    v-model="ex4"
                    label="red"
                    color="red"
                    value="red"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                  <v-checkbox
                    v-model="ex4"
                    label="indigo"
                    color="indigo"
                    value="indigo"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                  <!--Aqui lo inicializo sin marcar-->
                  <v-checkbox
                    v-model="ex4"
                    label="orange"
                    color="orange"
                    value=""
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="
            (dialog = false),
              updateTatos(this.selectedItem),
              (dialogUpdate = false)
          "
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { updateDoc } from "firebase/firestore";
import {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "@/Config/firebase";
export default {
  data() {
    return {
      dialogUpdate: false,
      selectedItem: [],
      legalFirstName: "",
      name: "",
      legalLastName: "",
      email: "",
      password: "",
      age: "",
      intereses: "",
      ex4: [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
      ],

      radioGroup: null,
      options: [
        { label: "Coche", value: "Coche" },
        { label: "Morto", value: "Moto" },
        { label: "Patinete", value: "Patinete" },
      ],
      dialog: false,
      dialogDelete: false,

      personas: [],
      itemsPerPage: 5,
      headers: [
        {
          title: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "Primer nombre", align: "end", key: "legalFirstName" },
        { title: "Veiculo", align: "end", key: "vehiculo" },
        { title: "Apellido", align: "end", key: "legalLastName" },
        { title: "Email", align: "end", key: "email" },
        { title: "Edad", align: "end", key: "age" },
      ],
    };
  },
  created() {
    this.getPersonas();
  },
  methods: {
    async updateTatos(selectedItem) {
      const docRef = doc(db, "persona", selectedItem.id);
      await updateDoc(docRef, {
        legalFirstName: selectedItem.legalFirstName,
        name: selectedItem.name,
        legalLastName: selectedItem.legalLastName,
        email: selectedItem.email,
        password: selectedItem.password,
        age: selectedItem.age,
        intereses: selectedItem.intereses,
         vehiculo: this.radioGroup,
        color: this.ex4,
      });
      this.getPersonas();
    },
    mostrarDatosUpdate(item) {
      console.log(
        item.legalFirstName + " " + item.name + " " + item.legalLastName
      );
    },
    async save() {
      await addDoc(collection(db, "persona"), {
        legalFirstName: this.legalFirstName,
        name: this.name,
        legalLastName: this.legalLastName,
        email: this.email,
        password: this.password,
        age: this.age,
        intereses: this.intereses,
        vehiculo: this.radioGroup,
        color: this.ex4,

      });
      this.getPersonas();
    },
    async deleteItem(item) {
      // Agrega aquí la lógica para eliminar es necesario usar async
      try {
        const docRef = doc(db, "persona", item.id);
        await deleteDoc(docRef);
        // Vuelvemos a repintar la tabla
        this.getPersonas();
      } catch (error) {
        console.log(error);
      }
    },

    async getPersonas() {
      try {
        const snapshot = await getDocs(collection(db, "persona"));

        const personas = [];

        snapshot.forEach((doc) => {
          let personasData = doc.data();
          personasData.id = doc.id;
          personas.push(personasData);
        });

        this.personas = personas;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
