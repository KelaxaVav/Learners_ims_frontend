import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import loadScript from '../../hooks/loadScript';
import useStylesheet from '../../hooks/useStyleSheet';
import Route from '../../hooks/route';
import req from '../../utils/req';
import DataTableSkeleton from '../../utils/skeletons/DataTableSkeleton';
import TableView from '../../components/TableView';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { SETTING_NAME } from '../../utils/helper';

function Settings(props) {
  const adminCommissionForm = useForm();
  const [storeAdminCommissionFailed, setStoreAdminCommissionFailed] = useState(false)
  const [storeAdminCommissionSuccess, setStoreAdminCommissionSuccess] = useState(false)

  const agentCountryForm = useForm();
  const [isAgentCountryEditMode, setIsAgentCountryEditMode] = useState(false);
  const [storeAgentCountryFailed, setStoreAgentCountryFailed] = useState(false)
  const [storeAgentCountrySuccess, setStoreAgentCountrySuccess] = useState(false)

  const moderatorCountryForm = useForm();
  const [isModeratorCountryEditMode, setIsModeratorCountryEditMode] = useState(false);
  const [storeModeratorCountryFailed, setStoreModeratorCountryFailed] = useState(false)
  const [storeModeratorCountrySuccess, setStoreModeratorCountrySuccess] = useState(false)

  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);


  // agent country
  const agentCountrySelectRef = useRef();

  // moderator country
  const moderatorCountrySelectRef = useRef();

  // setting
  const [settingData, setSettingData] = useState();
  const [fetchSettingData, setFetchSettingData] = useState(true);

  // country
  const [countryData, setCountryData] = useState();
  const [countrySelectData, setCountrySelectData] = useState();
  // const [isCountryLoading, setIsCountryLoading] = useState(true);
  const [fetchCountryData, setFetchCountryData] = useState(true);

  const w = adminCommissionForm.watch()
  useEffect(() => { console.log(w); }, [w])


  useLayoutEffect(() => {
    req().get(`country`).then((res) => {
      const filtered = res.data?.data;
      // console.log(filtered)
      const mapped = filtered.map(x => ({ label: `${x.name} ${x.currency} (${x.currency_symbol})`, value: x.country_id }))
      setCountryData(filtered);
      setCountrySelectData(mapped);
      
      if (isAgentCountryEditMode) {
        agentCountrySelectRef.current.setValue(mapped.filter(x => agentCountryForm.getValues("agent").includes(x.value)))
        moderatorCountrySelectRef.current.setValue(mapped.filter(x => moderatorCountryForm.getValues("moderator").includes(x.value)))
      }

      // setIsCountryLoading(false);
    }).catch((err) => {
    }).finally(() => setFetchCountryData(false))
  }, [fetchCountryData, isAgentCountryEditMode, agentCountryForm, moderatorCountryForm])


  useLayoutEffect(() => {

    req().get("setting").then((res) => {
      if (res.data.status) {
        setSettingData(res.data.data)
      }

    }).catch((err) => {
    }).finally(() => {
      setFetchSettingData(false);
    })

  }, [fetchSettingData])



  useLayoutEffect(() => {
    if (settingData && countrySelectData) {

      // console.log(settingData);
      for (let i = 0; i < settingData.length; i++) {
        const setting = settingData[i];

        if (setting && setting.setting_name === SETTING_NAME.MODERATOR_COUNTRY) {
          moderatorCountryForm.setValue("moderator", JSON.parse(setting.setting_value))
          agentCountrySelectRef.current.setValue(countrySelectData.filter(x => agentCountryForm.getValues("agent")?.includes(x.value)))


          // console.log(JSON.parse(setting.setting_value));
        }

        if (setting && setting.setting_name === SETTING_NAME.AGENT_COUNTRY) {
          agentCountryForm.setValue("agent", JSON.parse(setting.setting_value))
          moderatorCountrySelectRef.current.setValue(countrySelectData.filter(x => moderatorCountryForm.getValues("moderator")?.includes(x.value)))
          // console.log(JSON.parse(setting.setting_value));
        }

        if (setting && setting.setting_name === SETTING_NAME.ADMIN_COMMISSION) {
          adminCommissionForm.setValue("adminCommission", setting.setting_value)
          // moderatorCountrySelectRef.current.setValue(countrySelectData.filter(x => moderatorCountryForm.getValues("moderator")?.includes(x.value)))
          // console.log(JSON.parse(setting.setting_value));
        }

      }

    }
  }, [fetchCountryData, agentCountryForm, moderatorCountryForm, settingData, countrySelectData])

  const handleAgentCountryChange = (selectedOption) => {
    // console.log(`Option selected:`, selectedOption, selectedOption.map(x => x.value))
    agentCountryForm.setValue("agent", selectedOption.map(x => x.value))
    // console.log(agentCountryForm.formState);
  };
  const handleModeratorCountryChange = (selectedOption) => {
    // console.log(`Option selected:`, selectedOption, selectedOption.map(x => x.value))
    moderatorCountryForm.setValue("moderator", selectedOption.map(x => x.value))
    // console.log(agentCountryForm.formState);
  };
  const handleAdminCommissionChange = (selectedOption) => {
    // console.log(`Option selected:`, selectedOption, selectedOption.map(x => x.value))
    adminCommissionForm.setValue("adminCommission", selectedOption?.target?.value)
    // console.log(w, selectedOption?.target?.value);
  };

  const onAgentCountrySubmit = (data) => {
    console.log(`Option selected:`,)
    setStoreAgentCountryFailed(false)
    setStoreAgentCountrySuccess(false)

    req().post(`setting`, {
      setting_name: SETTING_NAME.AGENT_COUNTRY,
      setting_value: JSON.stringify(data.agent)
    }).then((res) => {
      if (res.data.status) {
        setStoreAgentCountrySuccess(true)
      }
      else {
        setStoreAgentCountryFailed(true)
      }
    }).catch((err) => {
      setStoreAgentCountryFailed(true)
    })
  };

  const onModeratorCountrySubmit = (data) => {
    console.log(`Option selected:`, data)
    setStoreModeratorCountryFailed(false)
    setStoreModeratorCountrySuccess(false)

    req().post(`setting`, {
      setting_name: SETTING_NAME.MODERATOR_COUNTRY,
      setting_value: JSON.stringify(data.moderator)
    }).then((res) => {
      if (res.data.status) {
        setStoreModeratorCountrySuccess(true)
      }
      else {
        setStoreModeratorCountryFailed(true)
      }
    }).catch((err) => {
      setStoreModeratorCountryFailed(true)
    })
  };

  const onAdminCommissionSubmit = (data) => {
    console.log(`Option selected:`, data)
    setStoreAdminCommissionFailed(false)
    setStoreAdminCommissionSuccess(false)

    req().post(`setting`, {
      setting_name: SETTING_NAME.ADMIN_COMMISSION,
      setting_value: data.adminCommission
    }).then((res) => {
      if (res.data.status) {
        setStoreAdminCommissionSuccess(true)
      }
      else {
        setStoreAdminCommissionFailed(true)
      }
    }).catch((err) => {
      setStoreAdminCommissionFailed(true)
    })
  };

  return (
    <>
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h1>Settings</h1>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><a href="#"> Home</a></li>
                  <li className="breadcrumb-item active">Settings</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* end page title */}


        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-6 " >


            <div >
              <div className='d-flex'>
                <img className="img-circle  elevation -2 mx-1 " src="https://rathus.net:443/asset//img/list.png" style={{ width: 50, height: 50 }} />
                <div>
                  <h4 className='m-0'>Settings</h4>
                  <span>TMS All Settings </span>
                </div>
              </div>

            </div>
          </div>
          {/* <div className='col-lg-6 col-md-6 col-sm-6'>
            <button type="button" className="btn btn-success float-end" style={{ marginRight: 5 }} >
              Save
            </button>
          </div> */}
        </div>
        <hr />


        <div className="row">
          <div className="col">
            <form onSubmit={agentCountryForm.handleSubmit(onAgentCountrySubmit)}>
              <div className="card">
                <h5 className="card-header bg-transparent border-bottom text-uppercase">Agent Country</h5>
                <div className="card-body">
                  {/* <h4 className="card-title">Special title treatment</h4> */}
                  {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}

                  <div className="row mb-2">
                    <div className="col">
                      <div className="form-group">
                        <label>Country</label>
                        <Select
                          // {...productForm.register("agentCountry_id", { required: true })}
                          // form="agentCountry_id"
                          // closeMenuOnSelect={false}
                          {...agentCountryForm.register("agent", { required: true })}
                          required
                          // defaultValue={[agentCountrySelectData]}
                          // value={agentCountrySelectData?.length > 0 ? [agentCountrySelectData] : []}
                          ref={agentCountrySelectRef}
                          isMulti
                          onChange={handleAgentCountryChange}
                          name="colors"
                          isLoading={fetchCountryData}
                          options={countrySelectData}
                          className="basic-multi-select"
                          classNamePrefix="select"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center bg-transparent border-top text-muted">
                  {/* <span>2 days ago</span> */}
                  <span></span>
                  <div className='d-flex gap-2'>
                    <button type='button' className="btn btn-warning">Cancel</button>
                    <button type='submit' className="btn btn-success">Save</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form onSubmit={moderatorCountryForm.handleSubmit(onModeratorCountrySubmit)}>
              <div className="card">
                <h5 className="card-header bg-transparent border-bottom text-uppercase">Moderator Country</h5>
                <div className="card-body">
                  {/* <h4 className="card-title">Special title treatment</h4> */}
                  {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}

                  <div className="row mb-2">
                    <div className="col">
                      <div className="form-group">
                        <label>Country</label>
                        <Select
                          // {...productForm.register("moderatorCountry_id", { required: true })}
                          // form="moderatorCountry_id"
                          // closeMenuOnSelect={false}
                          {...moderatorCountryForm.register("moderator", { required: true })}
                          required
                          // defaultValue={[moderatorCountrySelectData]}
                          // value={moderatorCountrySelectData?.length > 0 ? [moderatorCountrySelectData] : []}
                          ref={moderatorCountrySelectRef}
                          isMulti
                          onChange={handleModeratorCountryChange}
                          name="colors"
                          isLoading={fetchCountryData}
                          options={countrySelectData}
                          className="basic-multi-select"
                          classNamePrefix="select"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center bg-transparent border-top text-muted">
                  {/* <span>2 days ago</span> */}
                  <span></span>
                  <div className='d-flex gap-2'>
                    <button type='button' className="btn btn-warning">Cancel</button>
                    <button type='submit' className="btn btn-success">Save</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form onSubmit={adminCommissionForm.handleSubmit(onAdminCommissionSubmit)}>
              <div className="card">
                <h5 className="card-header bg-transparent border-bottom text-uppercase">Admin Commission</h5>
                <div className="card-body">
                  {/* <h4 className="card-title">Special title treatment</h4> */}
                  {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}

                  <div className="row mb-2">
                    <div className="col">
                      <div className="form-group">
                        <label>Commission Amount</label>
                        {/* <Select
                          // {...productForm.register("moderatorCountry_id", { required: true })}
                          // form="moderatorCountry_id"
                          // closeMenuOnSelect={false}
                          {...moderatorCountryForm.register("moderator", { required: true })}
                          required
                          // defaultValue={[moderatorCountrySelectData]}
                          // value={moderatorCountrySelectData?.length > 0 ? [moderatorCountrySelectData] : []}
                          ref={moderatorCountrySelectRef}
                          isMulti
                          onChange={handleModeratorCountryChange}
                          name="colors"
                          isLoading={fetchCountryData}
                          options={countrySelectData}
                          className="basic-multi-select"
                          classNamePrefix="select"
                        /> */}
                        <input type="number" {...adminCommissionForm.register("adminCommission", { required: true })} className="form-control" name="Admin Commission" placeholder="Enter ..." onChange={handleAdminCommissionChange} />

                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center bg-transparent border-top text-muted">
                  {/* <span>2 days ago</span> */}
                  <span></span>
                  <div className='d-flex gap-2'>
                    <button type='button' className="btn btn-warning">Cancel</button>
                    <button type='submit' className="btn btn-success">Save</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

Settings.propTypes = {}

export default Settings
