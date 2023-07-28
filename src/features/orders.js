import React from 'react';
import Footer from './footer';
import WebTab from './webtab';

function Orders() {
  return (
    <div className="orderPage" style={{ height: '100vh' }}>
      <WebTab></WebTab>

      <div className="orderFormWrap">
        <form required>
          <label>
            Name:
            <input
              placeholder="Please type first and last name here..."
              type={'text'}
              required
            ></input>
          </label>

          <label className="orderFormItems">
            Gluten Treats:
            <select id="country" name="country" required>
              <option value="usa">Choose</option>
              <option value="usa">Chocolate Overload Blondie 4ct</option>
              <option value="usa">Peanut Butter Chocolate BLondie 4ct</option>
              <option value="usa"> Banana Chocolate Chip Muffins 12ct</option>
              <option value="usa"> Fudgy Brownies 4ct</option>
              <option value="usa"> Lemon-Blueberry Muffins 10ct</option>
              <option value="usa"> Lemon Loaf 1ct</option>
              <option value="usa"> Chocolate Chip Cookies 8ct</option>
              <option value="usa"> Apple Cider Doughnut Cake Medium</option>
              <option value="usa"> Apple Cider Doughnut Cake Large</option>
            </select>
          </label>

          <label className="orderFormItems">
            Gluten-Free or Keto Treats:
            <select id="treats" name="treats" required>
              <option value="usa">Choose</option>
              <option value="usa">
                Gluten Free Banana Chocolate Chip Muffins 6ct (oat flour, raw
                sugar)
              </option>
              <option value="usa">
                Gluten Free Banana Chocolate Chip Cookies 12ct (oat flour, raw
                sugar)
              </option>
              <option value="usa">
                Keto Friendly Mini Blueberry Muffins 12ct (almond floud,
                monkfruit sweetner)
              </option>
              <option value="usa">
                Keto Friendly Mini Blueberry Muffins 24ct (almond floud,
                monkfruit sweetner)
              </option>
              <option value="usa">
                Keto Friendly Lemon-Blueberry Bars 4ct (almond, coonut floud,
                monkfruit sweetner)
              </option>
              <option value="usa"> Keto Friendly Brownies 8ct </option>
              <option value="usa">
                Keto Friendly Chocolate Chip Cookies 6ct
              </option>
              <option value="usa">
                Keto Friendly Poppyseed Bundt Cake 1ct
              </option>
            </select>
          </label>

          <label>
            Email:
            <input
              placeholder="Please type email here..."
              type={'text'}
              required
            ></input>
          </label>
          <label>
            Comments:
            <input
              placeholder="Comments..."
              type={'text'}
              role="textbox"
              required
            ></input>
          </label>

          <input type="submit" value="Submit" required></input>
        </form>
      </div>
      <h2 className="heading-text">
        Orders <span>made to pick up or mail</span>
      </h2>
      <h6>mail fee will be included</h6>

      <Footer></Footer>
    </div>
  );
}

export default Orders;
